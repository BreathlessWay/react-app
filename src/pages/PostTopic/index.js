import React, { Component } from 'react';
import { Map } from 'immutable';
import './style.less';

export default class PostTopic extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topicInfo: Map({
        title: '',
        tab: '',
        content: ''
      })
    };
  }

  componentDidMount () {
    const baseBreadcrumb = this.props.match.params.id ? [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '编辑'
      }
    ] : [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '发贴'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);
  }

  render () {
    return (
      <article className="container-fluid">
        <section className='container topic-index'>
          topic
        </section>
      </article>
    );
  }
}
