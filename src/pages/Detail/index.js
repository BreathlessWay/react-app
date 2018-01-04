import React, { Component } from 'react';
import axios from 'axios';
import { fromJS, Map } from 'immutable';
import './style.less';
import Modal from '@components/Modal';
import asyncComponent from '@components/asyncComponent';

const DetailHeader = asyncComponent(() => import(/* webpackChunkName: "detail" */ '@components/DetailHeader'));
const DetailContent = asyncComponent(() => import(/* webpackChunkName: "detail" */ '@components/DetailContent'));
const DetailReplies = asyncComponent(() => import(/* webpackChunkName: "detail" */ '@components/DetailReplies'));

export default class Detail extends Component {
  constructor (props) {
    super(props);

    this.state = {
      info: fromJS({
        author: {},
        title: '',
        content: '',
        good: false,
        id: '',
        is_collect: false,
        last_reply_at: Date.now(),
        replies: [],
        reply_count: 0,
        tab: '',
        top: false,
        visit_count: 0,
        create_at: Date.now(),
        author_id: ''
      }),
      replay: Map({
        reply_id: '',
        name: '',
        show: false,
        title: '',
        content: '',
        info: ''
      })
    };
    this.handleCollect = this.handleCollect.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleReply = this.handleReply.bind(this);
    this.getDetail = this.getDetail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditTopic = this.handleEditTopic.bind(this);
  }

  componentDidMount () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']) || null;
    this.getDetail(accesstoken);
    const baseBreadcrumb = [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '详情'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);
  }

  getDetail (accesstoken) {
    axios.get(`/topic/${this.props.match.params.id}`, {params: {accesstoken}})
    .then(res => {
      const result = fromJS(res.data.data);
      this.setState({
        info: result
      });
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '请求异常'});
    });
  }

  handleCollect () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']),
      topic_id = this.state.info.get('id');
    if (!accesstoken) {
      this.props.handleDialog({type: 'warning', message: '请先登录'});
      return;
    }
    const is_collect = this.state.info.get('is_collect');
    is_collect ? axios.post('/topic_collect/de_collect', {accesstoken, topic_id})
    .then(() => {
      this.setState(preState => {
        return {
          info: preState.info.set('is_collect', false)
        };
      });
      this.props.handleDialog({type: 'success', message: '取消收藏成功'});
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '取消收藏失败'});
    }) : axios.post('/topic_collect/collect', {accesstoken, topic_id})
    .then(() => {
      this.setState(preState => {
        return {
          info: preState.info.set('is_collect', true)
        };
      });
      this.props.handleDialog({type: 'success', message: '收藏成功'});
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '收藏失败'});
    });
  }

  handleUp (id) {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    if (!accesstoken) {
      this.props.handleDialog({type: 'warning', message: '请先登录'});
      return;
    }
    axios.post(`/reply/${id}/ups`, {accesstoken})
    .then(res => {
      if (res.data.success) {
        res.data.action === 'up' && this.props.handleDialog({type: 'success', message: '点赞成功'});
        res.data.action === 'down' && this.props.handleDialog({type: 'success', message: '取消点赞成功'});
      }
      this.getDetail(accesstoken);
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '点赞失败'});
    });
  }

  handleReply ({name, reply_id}) {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    if (!accesstoken) {
      this.setState({
        type: 'warning',
        message: '请先登录'
      });
      return;
    }
    reply_id ? this.setState(preState => {
      const replayDate = preState.replay.update('show', () => true).update('title', () => `回复${name}`).update('name', () => name).update('reply_id', () => reply_id);
      return {
        replay: replayDate
      };
    }) : this.setState(preState => {
      const replayDate = preState.replay.update('show', () => true).update('title', () => `发表回复`);
      return {
        replay: replayDate
      };
    });
  }

  handleChange (e) {
    const content = e.target.value;
    if (content.trim().length > 100) {
      this.setState(preState => {
        return {
          replay: preState.replay.update('info', () => '评论最大不能超过100个字')
        };
      });
      return;
    }
    if (content.trim().length === 0) {
      this.setState(preState => {
        return {
          replay: preState.replay.update('content', () => content).update('info', () => '评论内容不能为空')
        };
      });
      return;
    }
    this.setState(preState => {
      return {
        replay: preState.replay.update('content', () => content).update('info', () => '')
      };
    });
  }

  handleSubmit () {
    const content = this.state.replay.get('content'),
      accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']),
      topic_id = this.props.match.params.id,
      name = this.state.replay.get('name'),
      reply_id = this.state.replay.get('reply_id'),
      data = reply_id ? {
        accesstoken,
        topic_id,
        reply_id,
        content: `@${name} ${content}`
      } : {
        accesstoken,
        topic_id,
        content
      };
    if (content.trim().length === 0) {
      this.setState(preState => {
        return {
          replay: preState.replay.update('info', () => '评论内容不能为空')
        };
      });
      return;
    }
    axios.post(`/topic/${topic_id}/replies`, {...data})
    .then(res => {
      if (res.data.success) {
        const replayInitial = Map({
          reply_id: '',
          name: '',
          show: false,
          title: '',
          content: ''
        });
        this.setState({
          replay: replayInitial
        });
        this.props.handleDialog({type: 'success', message: '回复成功'});
        this.getDetail(accesstoken);
      }
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '回复失败'});
    });
  }

  handleCloseModal () {
    const replayInitial = Map({
      reply_id: '',
      name: '',
      show: false,
      title: '',
      content: ''
    });
    this.setState({
      replay: replayInitial
    });
  }

  handleEditTopic (id) {
    this.props.history.push(`/topic/${id}`);
  }

  render () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    return <article className='container-fluid'>
      {
        <article className='container detail-index  py-3'>
          <DetailHeader info={ this.state.info } handleCollect={ this.handleCollect } handleEditTopic={ this.handleEditTopic }/>
          <DetailContent content={ this.state.info.get('content') }/>
          <DetailReplies replies={ this.state.info.get('replies') } handleUp={ this.handleUp } handleReply={ this.handleReply }/>
          <footer className='text-right mb-3'>
            <button type="button" className="btn btn-primary" onClick={ () => this.handleReply({name: '', reply_id: ''}) }>发表回复</button>
          </footer>
        </article>
      }
      {
        accesstoken && <Modal title={ this.state.replay.get('title') } show={ this.state.replay.get('show') } handleSubmit={ this.handleSubmit } handleCloseModal={ this.handleCloseModal }>
          <section>
            <div className="modal-body">
              <form className='px-3'>
                <div className="form-group">
                  <label htmlFor="replayContent"/>
                  <textarea className="form-control" id="replayContent" rows="3" value={ this.state.replay.get('content') } onChange={ this.handleChange }/>
                </div>
                <p className='text-danger replay-info'>{ this.state.replay.get('info') }</p>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={ this.handleCloseModal }>取消</button>
              <button type="button" className="btn btn-primary" onClick={ this.handleSubmit }>提交</button>
            </div>
          </section>
        </Modal>
      }
    </article>;
  }
}
