import React, { Component } from 'react';
import { is } from 'immutable';
import PropTypes from 'prop-types';
import './style.less';

import asyncComponent from '@components/asyncComponent';

const RepliesItem = asyncComponent(() => import(/* webpackChunkName: "detail" */ '@components/RepliesItem'));

export default class DetailReplies extends Component {
  static propTypes = {
    replies: PropTypes.object.isRequired,
    handleUp: PropTypes.func.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.replies, nextProps.replies);
  }

  componentDidUpdate () {
    console.log('detail replies is updated');
  }

  render () {
    return (
      <section className='container my-5 pt-3 px-0 replies-index'>
        <header>
          <h3 className='replies-index_header'>
            评论列表
          </h3>
        </header>
        {
          this.props.replies.size > 0 ? <ul>
            {
              this.props.replies.map(item => (
                <RepliesItem item={ item } handleUp={ id => this.props.handleUp(id) } handleReply={ id => this.props.handleReply(id) } key={ item.get('id') }/>
              ))
            }
          </ul> : <aside className='text-center py-3 text-muted'>暂无评论</aside>
        }
      </section>
    );
  }
}
