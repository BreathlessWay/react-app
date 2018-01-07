import React, { Component } from 'react';
import { is } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MessageList extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    messageItem: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    handleMarkRead: PropTypes.func
  };

  componentDidMount () {}

  shouldComponentUpdate (nextProps) {
    return !is(this.props.messageItem, nextProps.messageItem);
  }

  componentDidUpdate () {
    console.log('message item is updated');
  }

  handleClick (e, id) {
    e.stopPropagation();
    e.preventDefault();
    this.props.handleMarkRead(id);
  }

  render () {
    const item = this.props.messageItem;
    return (
      <Link to={ `/detail/${item.getIn(['topic', 'id'])}` } className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 overflow-ellipsis col-10 px-0">{ item.getIn(['topic', 'title']) }</h5>
          <small className="mb-1 overflow-ellipsis col-2 px-0 text-right">{ new Date(item.getIn(['topic', 'last_reply_at'])).Format('yyyy-MM-dd HH:mm') }</small>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <div className='col-10 px-0'>
            <p className="mb-1" dangerouslySetInnerHTML={ {__html: item.getIn(['reply', 'content'])} }/>
            <small>{ new Date(item.getIn(['reply', 'create_at'])).Format('yyyy-MM-dd HH:mm') }</small>
          </div>
          {
            !this.props.isRead && <button type="button" className="btn btn-outline-primary btn-sm h-25 align-self-end" onClick={ e => this.handleClick(e, item.get('id')) }>标记已读</button>
          }
        </div>
      </Link>
    );
  }
}
