import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.less';
import Modal from '../Modal';
import asyncComponent from '@components/asyncComponent';

const LoginForm = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/LoginForm'));
const Register = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Register'));

const logo = require('@static/img/cnodejs_light.svg');

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      content: <p/>
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit () {
    this.setState({
      show: false,
      title: '',
      content: <p/>
    });
  }

  handleCloseModal () {
    this.setState({
      show: false,
      title: '',
      content: <p/>
    });
  }

  handleLogin (e) {
    e.preventDefault();
    this.setState({
      show: true,
      title: '登录',
      content: <LoginForm handleCloseModal={ this.handleCloseModal }/>
    });
  }

  handleRegister (e) {
    e.preventDefault();
    this.setState({
      show: true,
      title: '注册',
      content: <Register handleCloseModal={ this.handleCloseModal }/>
    });
  }

  handleLogout (e) {
    e.preventDefault();
    sessionStorage.setItem('userInfo', '');
    this.props.logout();
    window.history.go();
  }

  render () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']),
      name = this.props.entry.getIn(['userInfo', 'loginname']),
      messageCount = this.props.app.get('messageCount');
    return (
      <header className='header header-container container-fluid bg-dark'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
          <Link className="navbar-brand" to="/">
            <img src={ logo } alt=""/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-3">
                <NavLink to='/' className="nav-link" activeClassName='active' exact>首页</NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink to='/api' className="nav-link" activeClassName='active' exact>API</NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink to='/intro' className="nav-link" activeClassName='active' exact>介绍</NavLink>
              </li>
            </ul>
            <aside>
              {
                accesstoken ? <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle pr-0 home-index_name" href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { name }{ messageCount > 0 && <span className="badge badge-pill badge-danger"/> }
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href={ `/user/${ name }` }>用户</a>
                    <NavLink className="dropdown-item" to="/topic">发帖</NavLink>
                    <NavLink className="dropdown-item home-index_message" to="/messages">
                      <span>消息</span>
                      {
                        messageCount > 0 && <span className="badge badge-pill badge-danger">{ messageCount }</span>
                      }
                    </NavLink>
                    <a className="dropdown-item" href="/logout" onClick={ this.handleLogout }>退出</a>
                  </div>
                </div> : <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle  pr-0" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    用户
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/login" onClick={ this.handleLogin }>登录</a>
                    <a className="dropdown-item" href="/register" onClick={ this.handleRegister }>注册</a>
                  </div>
                </div>
              }
            </aside>
          </div>
        </nav>
        <Modal { ...this.state } handleCloseModal={ this.handleCloseModal } handleSubmit={ this.handleSubmit }>
          { this.state.content }
        </Modal>
      </header>
    );
  }
};
