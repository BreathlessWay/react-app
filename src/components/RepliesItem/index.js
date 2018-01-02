import React, { Component } from 'react';
import { is } from 'immutable';
import PropTypes from 'prop-types';
import './style.less';

export default class RepliesItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    handleUp: PropTypes.func.isRequired,
    handleReply: PropTypes.func.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.item, nextProps.item);
  }

  componentDidUpdate () {
    console.log('detail replies item is updated');
  }

  render () {
    const {item} = this.props, accessToken = this.props.entry.getIn(['userInfo', 'accesstoken']) || null;
    return (
      <li key={ item.get('id') } className={ item.get('is_uped') ? 'd-flex align-items-stretch py-4 replies-index_container bg-light' : 'd-flex align-items-stretch py-4 replies-index_container' }>
        <div className='mr-3 replies-index_avatar d-flex flex-column justify-content-center align-items-center'>
          <img src={ item.getIn(['author', 'avatar_url']) } alt='avatar' className="rounded-circle mb-1" width={ 50 }/>
          <p className='overflow-ellipsis'>
            { item.getIn(['author', 'loginname']) }
          </p>
        </div>
        <div className='replies-index_content'>
          <div dangerouslySetInnerHTML={ {__html: item.get('content')} }/>
          <p className='text-right'>
            <i className="iconfont icon-zan pr-1" onClick={ () => this.props.handleUp(item.get('id')) }/><i>{ item.get('ups').size }</i>
            <i className="iconfont icon-shijian pr-1 pl-4"/><i>{ new Date(item.get('create_at')).Format('yyyy-MM-dd HH:mm') }</i>
            {
              accessToken && <i className="iconfont icon-huifu pr-1 pl-4" onClick={ () => this.props.handleReply({name: item.getIn(['author', 'loginname']), reply_id: item.get('id')}) }/>
            }
          </p>
        </div>
      </li>
    );
  }
}
