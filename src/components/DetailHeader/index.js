import React, { Component } from 'react';
import Badge from '@components/Badge';
import { is } from 'immutable';
import PropTypes from 'prop-types';

export default class DetailHeader extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    handleCollect: PropTypes.func.isRequired,
    handleEditTopic: PropTypes.func.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.info, nextProps.info);
  }

  componentDidUpdate () {
    console.log('detail header is updated');
  }

  render () {
    const {info, handleCollect, handleEditTopic} = this.props,
      id = this.props.entry.getIn(['userInfo', 'id']),
      author_id = info.get('author_id');
    return (
      <header>
        <h3>
          { info.get('title') }
        </h3>
        <section className='d-flex py-3 align-items-center justify-content-between'>
          <div className='d-flex'>
            <p className='d-flex align-items-center'>
              {
                info.get('good') && <Badge good={ info.get('good') }/>
              }
              {
                info.get('top') && <Badge top={ info.get('top') }/>
              }
              {
                <Badge tab={ info.get('tab') }/>
              }
            </p>
            <p className='detail-index_tips text-secondary ml-3'>
              <i className="iconfont icon-yanjing pr-1 "/><i>{ info.get('visit_count') }</i>
              <i className="iconfont icon-huifu1 pr-1 pl-4"/><i>{ info.get('reply_count') }</i>
              <i className="iconfont icon-zuozhe pr-1 pl-4"/><i>{ info.getIn(['author', 'loginname']) }</i>
              <i className="iconfont icon-shijian pl-4 pr-1"/><i>{ new Date(info.get('create_at')).Format('yyyy-MM-dd HH:mm') }</i>
            </p>
          </div>
          <div>
            {
              id === author_id && <button type="button" className="btn btn-primary" onClick={ () => handleEditTopic(info.get('id')) }>编辑</button>
            }
            &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" onClick={ handleCollect }>{ info.get('is_collect') ? '已收藏' : '收藏' }</button>
          </div>
        </section>
      </header>
    );
  }
}

