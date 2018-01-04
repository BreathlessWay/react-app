import React, { Component } from 'react';
import { fromJS, Map } from 'immutable';
import axios from 'axios';
import './style.less';

export default class PostTopic extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topicInfo: Map({
        title: '',
        tab: 'dev',
        content: ''
      }),
      topicError: Map({
        title: '',
        content: ''
      }),
      time: null
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTopicSubmit = this.handleTopicSubmit.bind(this);
    this.handleSubmitNewTopic = this.handleSubmitNewTopic.bind(this);
    this.handleEditTopic = this.handleEditTopic.bind(this);
  }

  componentDidMount () {
    const baseBreadcrumb = this.props.match.params.id ? [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '编辑'
      }
    ] : [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '发贴'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);
    this.props.match.params.id && this.getDetail();
  }

  getDetail () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    axios.get(`/topic/${this.props.match.params.id}`, {params: {accesstoken, mdrender: false}})
    .then(res => {
      const result = fromJS(res.data.data);
      this.setState({
        topicInfo: result
      });
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '请求异常'});
    });
  }

  handleTitleChange (e) {
    const title = e.target.value;
    if (title.length === 0) {
      this.setState(preState => {
        return {
          topicError: preState.topicError.set('title', '标题不能为空'),
          topicInfo: preState.topicInfo.set('title', title.trim())
        };
      });
      return;
    }
    if (title.length > 100) {
      this.setState(preState => {
        return {
          topicError: preState.topicError.set('title', '标题不能超过100个字')
        };
      });
      return;
    }
    this.setState(preState => {
      return {
        topicError: preState.topicError.set('title', ''),
        topicInfo: preState.topicInfo.set('title', title.trim())
      };
    });
  }

  handleContentChange (e) {
    const content = e.target.value;
    if (content.length === 0) {
      this.setState(preState => {
        return {
          topicError: preState.topicError.set('content', '内容不能为空'),
          topicInfo: preState.topicInfo.set('content', content.trim())
        };
      });
      return;
    }
    if (content.length > 500) {
      this.setState(preState => {
        return {
          topicError: preState.topicError.set('content', '内容不能超过500个字')
        };
      });
      return;
    }
    this.setState(preState => {
      return {
        topicError: preState.topicError.set('content', ''),
        topicInfo: preState.topicInfo.set('content', content.trim())
      };
    });
  }

  handleTabChange (e) {
    const tab = e.target.value;
    this.setState(preState => {
      return {
        topicInfo: preState.topicInfo.set('tab', tab)
      };
    });
  }

  handleTopicSubmit () {
    const title = this.state.topicInfo.get('title'),
      content = this.state.topicInfo.get('content'),
      tab = this.state.topicInfo.get('tab'),
      accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    try {
      if (this.state.topicInfo.get('title').length === 0) {
        this.setState(preState => {
          return {
            topicError: preState.topicError.set('title', '标题不能为空')
          };
        });
        throw new Error('标题不能为空');
      }
      if (this.state.topicInfo.get('content').length === 0) {
        this.setState(preState => {
          return {
            topicError: preState.topicError.set('content', '内容不能为空')
          };
        });
        throw new Error('内容不能为空');
      }
      if (this.state.topicError.get('content').length > 0) {
        throw new Error('内容过长');
      }
      if (this.state.topicError.get('title').length > 0) {
        throw new Error('标题过长');
      }
    } catch (err) {
      return;
    }

    this.props.match.params.id ? this.handleEditTopic({accesstoken, title, tab, content, topic_id: this.props.match.params.id}) : this.handleSubmitNewTopic({accesstoken, title, tab, content});
  }

  handleEditTopic ({accesstoken, title, tab, content, topic_id}) {
    axios.post('/topics/update', {accesstoken, title, tab, content, topic_id})
    .then(res => {
      if (res.data.success) {
        this.setState({
          time: setTimeout(() => {
            this.props.history.replace('/');
          }, 1000)
        });
        this.props.handleDialog({type: 'success', message: '编辑成功'});
      }
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '编辑失败'});
    });
  }

  handleSubmitNewTopic ({accesstoken, title, tab, content}) {
    axios.post('/topics', {accesstoken, title, tab, content})
    .then(res => {
      if (res.data.success) {
        this.setState({
          time: setTimeout(() => {
            this.props.history.replace('/');
          }, 1000)
        });
        this.props.handleDialog({type: 'success', message: '发帖成功'});
      }
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '发帖失败'});
    });
  }

  componentWillUnmount () {
    window.clearTimeout(this.state.time);
  }

  render () {
    return (
      <article className="container-fluid">
        <section className='container topic-index'>
          <form className='pt-4 px-5 pb-2'>
            <div className="form-group row">
              <label htmlFor="topicTitle" className="col-sm-1 col-form-label">标题</label>
              <div className="col-sm-11">
                <input type="text" className="form-control" id="topicTitle" value={ this.state.topicInfo.get('title') } onChange={ this.handleTitleChange }/>
                <p className='text-danger topic-index_error pt-1'>{ this.state.topicError.get('title') }</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="topicContent" className="col-sm-1 col-form-label">内容</label>
              <div className="col-sm-11">
                <textarea className="form-control" id="topicContent" rows="10" value={ this.state.topicInfo.get('content') } onChange={ this.handleContentChange }/>
                <p className='text-danger topic-index_error pt-1'>{ this.state.topicError.get('content') }</p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="topicTab" className="col-sm-1 col-form-label">分类</label>
              <div className="col-sm-11">
                <select className="form-control" id="topicTab" value={ this.state.topicInfo.get('tab') } onChange={ this.handleTabChange }>
                  <option value='ask'>问答</option>
                  <option value='share'>分享</option>
                  <option value='job'>工作</option>
                  <option value='dev'>测试</option>
                </select>
                <p className='text-danger topic-index_error pt-1'>官方警告：请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。</p>
              </div>
            </div>
          </form>
          <footer className='px-5 text-right pb-4'>
            <button type="button" className="btn btn-secondary" onClick={ this.props.history.goBack }>取消</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" onClick={ this.handleTopicSubmit }>提交</button>
          </footer>
        </section>
      </article>
    );
  }
}
