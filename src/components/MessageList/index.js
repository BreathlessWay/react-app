import React, { Component } from 'react';
import { is } from 'immutable';
import PropTypes from 'prop-types';
import MessageItem from '@components/MessageItem';

export default class MessageList extends Component {
  static propTypes = {
    messageTitle: PropTypes.string.isRequired,
    messageList: PropTypes.object.isRequired,
    isRead: PropTypes.bool.isRequired,
    handleMarkRead: PropTypes.func,
    handleMarkReadAll: PropTypes.func,
    noTips: PropTypes.string.isRequired
  };

  componentDidMount () {}

  shouldComponentUpdate (nextProps) {
    return !is(this.props.messageList, nextProps.messageList);
  }

  componentDidUpdate () {
    console.log('message list is updated');
  }

  render () {
    return (
      <section className='pb-4'>
        <header className='pb-3 d-flex justify-content-between align-items-center'>
          <h3>
            { this.props.messageTitle }
          </h3>
          {
            !this.props.isRead && this.props.messageList.size > 0 && <button type="button" className="btn btn-primary btn-sm" onClick={ this.props.handleMarkReadAll }>全部标记已读</button>
          }
        </header>
        <div className="list-group">
          {
            this.props.messageList.size > 0 ? this.props.messageList.map(item => (
              this.props.isRead ? <MessageItem messageItem={ item } isRead={ true }/> : <MessageItem messageItem={ item } isRead={ false } handleMarkRead={ this.props.handleMarkRead }/>
            )) : <aside className='text-center py-3 text-muted'>{ this.props.noTips }</aside>
          }
        </div>
      </section>

    );
  }
}
