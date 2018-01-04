import React, { Component } from 'react';
import axios from 'axios';
import { fromJS } from 'immutable';
import asyncComponent from '@components/asyncComponent';
import './style.less';

const UserInfoByNameList = asyncComponent(() => import(/* webpackChunkName: "user" */ '@components/UserInfoByNameList'));

export default class UserInfoByName extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInfo: fromJS({
        avatar_url: '',
        create_at: '',
        githubUsername: '',
        loginname: '',
        recent_replies: [],
        recent_topics: [],
        score: 0
      }),
      userCollect: fromJS([])
    };
    this.handleClickRow = this.handleClickRow.bind(this);
  }

  componentDidMount () {
    const baseBreadcrumb = [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '用户详情'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);

    // 用户信息
    axios.get(`/user/${this.props.match.params.name}`)
    .then(res => {
      this.setState({
        userInfo: fromJS(res.data.data)
      });
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '请求用户信息失败'});
    });

    // 用户收藏主题
    axios.get(`/topic_collect/${this.props.match.params.name}`)
    .then(res => {
      this.setState({
        userCollect: fromJS(res.data.data)
      });
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '获取用户收藏主题失败'});
    });
  }

  handleClickRow (id) {
    this.props.history.push(`/detail/${id}`);
  }

  render () {
    return (
      <article className='container-fluid'>
        <section className='container user-name-index pt-3 pb-4'>
          <header className='d-flex align-items-center user-name-index_header pb-4'>
            <img src={ this.state.userInfo.get('avatar_url') } alt="" className='rounded-circle' width={ 60 }/>
            <div className='ml-3'>
              <p><span className='user-name-index_header_center'>用户名：</span><span>{ this.state.userInfo.get('loginname') }</span></p>
              <p><span className='user-name-index_header_center'>注册时间：</span><span>{ new Date(this.state.userInfo.get('create_at')).Format('yyyy-MM-dd') }</span></p>
            </div>
            <div className='ml-5'>
              <p><span className='user-name-index_header_right'>github用户名：</span><span>{ this.state.userInfo.get('githubUsername') }</span></p>
              <p><span className='user-name-index_header_right'>积分：</span><span>{ this.state.userInfo.get('score') }</span></p>
            </div>
          </header>
          <UserInfoByNameList title='收藏的主题' noTips='暂未收藏过主题' topicList={ this.state.userCollect } handleClickRow={ this.handleClickRow }/>
          <UserInfoByNameList title='最近回复的主题' noTips='暂未有过回复信息' topicList={ this.state.userInfo.get('recent_replies') } handleClickRow={ this.handleClickRow }/>
          <UserInfoByNameList title='最近发表的主题' noTips='暂未发表过主题' topicList={ this.state.userInfo.get('recent_topics') } handleClickRow={ this.handleClickRow }/>
        </section>
      </article>
    );
  }
}
