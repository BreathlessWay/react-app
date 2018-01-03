import React, { Component } from 'react';
import './style.less';

export default class Message extends Component {
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
  }

  render () {
    return (
      <article className="container-fluid">
        <section className="container">
          message
        </section>
      </article>
    );
  }
}
