import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import asyncComponent from '@components/asyncComponent';

const UserInfoByNameItem = asyncComponent(() => import(/* webpackChunkName: "user" */ '@components/UserInfoByNameItem'));

export default class UserInfoByNameList extends Component {
  static propTypes = {
    topicList: PropTypes.object.isRequired,
    noTips: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.topicList, nextProps.topicList);
  }

  componentDidUpdate () {
    console.log('user info by name list is updated');
  }

  handleClickRow (id) {
    this.props.history.push(`/detail/${id}`);
  }

  render () {
    return (
      <section className='user-name-index-topic mb-3'>
        <header>
          <h3>{ this.props.title }</h3>
        </header>
        {
          this.props.topicList.size > 0 ? <ul className="list-group py-3">
            {
              this.props.topicList.map(item => (
                <UserInfoByNameItem topicItem={ item } key={ item.get('id') }/>
              ))
            }
          </ul> : <aside className='text-center py-3 text-muted'>{ this.props.noTips }</aside>
        }
      </section>
    );
  }
}
