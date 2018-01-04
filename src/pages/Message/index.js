import React, { Component } from 'react';
import axios from 'axios';
import { fromJS } from 'immutable';
import asyncComponent from '@components/asyncComponent';
import './style.less';

const MessageList = asyncComponent(() => import(/* webpackChunkName: "detail" */ '@components/MessageList'));

export default class Message extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messageList: fromJS({
        has_read_messages: [],
        hasnot_read_messages: []
      })
    };
    this.handleMarkRead = this.handleMarkRead.bind(this);
    this.handleMarkReadAll = this.handleMarkReadAll.bind(this);
    this.getMessageList = this.getMessageList.bind(this);
  }

  componentDidMount () {
    const baseBreadcrumb = [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '消息'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    this.getMessageList(accesstoken);
  }

  getMessageList (accesstoken) {
    axios.get('/messages', {params: {accesstoken}})
    .then(res => {
      this.setState({
        messageList: fromJS(res.data.data)
      });
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '获取消息列表失败'});
    });
  }

  handleMarkRead (id) {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    axios.post(`/message/mark_one/${id}`, {accesstoken})
    .then(res => {
      if (res.data.success) {
        this.props.handleDialog({type: 'success', message: '标记已读成功'});
        this.props.getMessageCount(accesstoken);
        this.getMessageList(accesstoken);
      }
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '标记已读失败'});
    });
  }

  handleMarkReadAll () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    axios.post('/message/mark_all', {accesstoken})
    .then(res => {
      if (res.data.success) {
        this.props.handleDialog({type: 'success', message: '标记全部已读成功'});
        this.props.getMessageCount(accesstoken);
        this.getMessageList(accesstoken);
      }
    })
    .catch(err => {
      const errData = err.response.data;
      this.props.handleDialog({type: 'danger', message: errData ? errData.error_msg : '标记全部已读失败'});
    });
  }

  render () {
    return (
      <article className="container-fluid">
        <section className="container message-index">
          <MessageList messageTitle='已读消息' messageList={ this.state.messageList.get('has_read_messages') } isRead={ true } noTips='没有已读消息'/>
          <MessageList messageTitle='未读消息' messageList={ this.state.messageList.get('hasnot_read_messages') } isRead={ false } handleMarkRead={ this.handleMarkRead } handleMarkReadAll={ this.handleMarkReadAll } noTips='没有未读消息'/>
        </section>
      </article>
    );
  }
}
