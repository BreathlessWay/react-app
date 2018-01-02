import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '@store';
import asyncComponent from '@components/asyncComponent';
import { bindActionCreators } from 'redux';
import actions from '../store/actions';

const Header = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Header'));
const ScrollTop = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/ScrollTop'));
const Breadcrumb = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Breadcrumb'));
const Footer = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Footer'));

const Home = asyncComponent(() => import(/* webpackChunkName: "home" */ './Home'));
const Detail = asyncComponent(() => import(/* webpackChunkName: "detail" */ './Detail'));
const UserInfoByName = asyncComponent(() => import(/* webpackChunkName: "user" */ './UserInfoByName'));
const NotFound = asyncComponent(() => import(/* webpackChunkName: "not-found" */ './NotFound'));

class App extends Component {
  componentWillMount () {
    const userInfo = sessionStorage.getItem('userInfo');
    userInfo && this.props.entryUserCookie(JSON.parse(userInfo));
  }

  render () {
    return (
      <ConnectedRouter history={ history }>
        <ScrollTop>
          <article className='container-flud'>
            <Header { ...this.props }/>
            <Breadcrumb entry={ this.props.entry }/>
            <Switch>
              <Route path='/' exact component={ Home }/>
              <Route path='/detail/:id?' component={ Detail }/>
              <Route path='/user/:name' component={ UserInfoByName }/>
              <Route component={ NotFound }/>
            </Switch>
            <Footer/>
          </article>
        </ScrollTop>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps (state) {
  return {
    router: state.get('router'),
    entry: state.get('entry')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


