import React, { PureComponent } from 'react';

export default class Intro extends PureComponent {
  componentDidMount () {
    const baseBreadcrumb = [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: '介绍'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);
  }

  render () {
    return (
      <article className='container-fluid'>
        <section className="container bg-white py-4">
          <p>只是一个用来回忆复习一下react相关技术栈的练手项目，主要用了以下技术：</p>
          <br/>
          <ul className='pl-4'>
            <li>
              <a href="https://doc.react-china.org/" target='_blank'>react</a>
            </li>
            <li>
              <a href="http://reacttraining.cn/web/example/basic" target='_blank'>react-router v4</a>
            </li>
            <li>
              <a href="https://github.com/facebook/prop-types" target='_blank'>prop-types</a>
            </li>
            <li>
              <a href=" https://github.com/gaearon/react-hot-loader" target='_blank'>react-hot-loader</a>
            </li>
            <li>
              <a href="http://cn.redux.js.org/index.html" target='_blank'>redux</a>
            </li>
            <li>
              <a href="https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux" target='_blank'>react-router-redux</a>
            </li>
            <li>
              <a href="https://www.kancloud.cn/yunye/axios/234845" target='_blank'>axios</a>
            </li>
            <li>
              <a href="https://github.com/svrcekmichal/redux-axios-middleware" target='_blank'>redux-axios-middleware</a>
            </li>
            <li>
              <a href="https://v4.bootcss.com/" target='_blank'>bootstrap v4</a>
            </li>
            <li>
              <a href="http://facebook.github.io/immutable-js/" target='_blank'>immutable</a>
            </li>
            <li>
              <a href="https://github.com/gajus/redux-immutable" target='_blank'>redux-immutable</a>
            </li>
            <li>
              <a href="http://less.bootcss.com/" target='_blank'>less</a>
            </li>
            <li>
              <a href="https://github.com/facebookincubator/create-react-app" target='_blank'>create-react-app</a>
            </li>
          </ul>
          <br/>
          <p>
            以create-react-app脚手架为基础，npm run eject暴漏配置后，自定义修改配置
          </p>
          <p>项目的github地址 <a href="https://github.com/BreathlessWay/react-app" target='_blank'>react-app</a></p>
          <p>项目还有很多不足之处，欢迎提出宝贵意见，不断完善，不断进步</p>
        </section>
      </article>
    );
  }
}
