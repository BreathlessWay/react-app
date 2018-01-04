import React, { Component } from 'react';
import './style.less';
import HomeList from '@components/HomeList';
import { Map } from 'immutable';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleGetList = this.handleGetList.bind(this);
    this.handleSet = this.handleSet.bind(this);
    this.handleClickPre = this.handleClickPre.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  handleClickMenu (params) {
    if (this.props.list.getIn(['params', 'tab']) === params.tab) return;
    const _params = Map({
      ...params,
      page: 1
    });
    const data = this.props.list.get('params').merge(_params);
    this.handleGetList(data);
  }

  handleGetList (params) {
    this.props.getList(params.toJS())
    .then(() => {
      this.handleSet();
    })
    .catch(err => {
      const errData = err.error.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '获取主题列表失败'});
    });
  }

  handleClickPre (e) {
    e.preventDefault();
    const data = this.props.list.get('params').updateIn(['page'], page => page - 1);
    this.handleGetList(data);
  }

  handleClickNext (e) {
    e.preventDefault();
    const data = this.props.list.get('params').updateIn(['page'], page => page + 1);
    this.handleGetList(data);
  }

  handleSet () {
    const baseBreadcrumb = [
      {
        path: '/',
        name: '首页'
      }
    ];
    switch (this.props.list.getIn(['params', 'tab'])) {
      case 'ask':
        baseBreadcrumb.push({
          path: '/',
          name: '问答'
        });
        break;
      case 'job':
        baseBreadcrumb.push({
          path: '/',
          name: '工作'
        });
        break;
      case 'share':
        baseBreadcrumb.push({
          path: '/',
          name: '分享'
        });
        break;
      case 'good':
        baseBreadcrumb.push({
          path: '/',
          name: '精华'
        });
        break;
      default:
        document.title = '全部';
    }
    this.props.setBreadcrumb(baseBreadcrumb);
  }

  componentDidMount () {
    this.handleGetList(this.props.list.get('params'));
  }

  render () {
    const params = this.props.list.get('params'), result = this.props.list.get('result');

    return (
      <article className='home-index container pb-4'>
        <section className="row">
          <article className="tab-content col-10">
            <HomeList { ...this.props }/>
            <ul className="pagination mt-4 text-center justify-content-center">
              <li className={ params.get('page') === 1 ? 'page-item disabled' : 'page-item' }>
                <a className="page-link" href="/" onClick={ this.handleClickPre }>上一页 </a>
              </li>
              <li className='page-item disabled px-3'>
                <span className="badge badge-info home-index_page">
                  第{ params.get('page') }页
                </span>
              </li>
              <li className={ result.length < params.get('limit') ? 'page-item disabled' : 'page-item' }>
                <a className="page-link" href="/" onClick={ this.handleClickNext }>下一页</a>
              </li>
            </ul>
          </article>
          <nav className="nav flex-column nav-pills col-2 pt-0">
            <button type="button" className="btn btn-primary mb-3" onClick={ () => this.handleClickMenu({tab: ''}) }>全部</button>
            <button type="button" className="btn btn-secondary mb-3" onClick={ () => this.handleClickMenu({tab: 'ask'}) }>问答</button>
            <button type="button" className="btn btn-success mb-3" onClick={ () => this.handleClickMenu({tab: 'share'}) }>分享</button>
            <button type="button" className="btn btn-danger mb-3" onClick={ () => this.handleClickMenu({tab: 'good'}) }>精华</button>
            <button type="button" className="btn btn-info mb-3" onClick={ () => this.handleClickMenu({tab: 'job'}) }>工作</button>
            <button type="button" className="btn btn-warning" onClick={ () => this.handleClickMenu({tab: 'dev'}) }>测试</button>
          </nav>
        </section>
      </article>
    );
  }
}

