import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { is } from 'immutable';

export default class UserInfoByNameItem extends Component {
  static propTypes = {
    topicItem: PropTypes.object.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.topicItem, nextProps.topicItem);
  }

  componentDidUpdate () {
    console.log('user info by name item is updated');
  }

  handleClickRow (id) {
    this.props.history.push(`/detail/${id}`);
  }

  render () {
    const item = this.props.topicItem;
    return (
      <li className="list-group-item cursor-pointer d-flex justify-content-between" onClick={ () => this.handleClickRow(item.get('id')) }>
        <span className='overflow-ellipsis'>
          { item.get('title') }
        </span>
        <span className='overflow-ellipsis'>
          { new Date(item.get('last_reply_at')).Format('yyyy-MM-dd HH:mm') }
        </span>
      </li>
    );
  }
}
