import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '@store';
import asyncComponent from '@components/asyncComponent';
import BackToTop from '@components/BackToTop';
import Alert from '@components/Alert';
import { bindActionCreators } from 'redux';
import actions from '../store/actions';
import $ from '$';

const Header = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Header'));
const ScrollTop = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/ScrollTop'));
const Breadcrumb = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Breadcrumb'));
const Footer = asyncComponent(() => import(/* webpackChunkName: "entry" */ '@components/Footer'));

const Home = asyncComponent(() => import(/* webpackChunkName: "home" */ './Home'));
const Detail = asyncComponent(() => import(/* webpackChunkName: "detail" */ './Detail'));
const UserInfoByName = asyncComponent(() => import(/* webpackChunkName: "user" */ './UserInfoByName'));
const PostTopic = asyncComponent(() => import(/* webpackChunkName: "topic" */ './PostTopic'));
const Api = asyncComponent(() => import(/* webpackChunkName: "other" */ './Api'));
const Intro = asyncComponent(() => import(/* webpackChunkName: "other" */ './Intro'));
const Message = asyncComponent(() => import(/* webpackChunkName: "message" */ './Message'));
const NotFound = asyncComponent(() => import(/* webpackChunkName: "not-found" */ './NotFound'));

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount () {
    const userInfo = sessionStorage.getItem('userInfo');
    if (userInfo) {
      const accesstoken = JSON.parse(userInfo).accesstoken;
      accesstoken && this.props.getMessageCount(accesstoken);
      this.props.entryUserCookie(JSON.parse(userInfo));
    }
    $(window).on('scroll', () => {
      const _top = $(document).scrollTop();
      this.setState({
        show: _top > 0
      });
    });
  }

  handleCloseDialog () {
    this.props.handleDialog({type: '', message: ''});
  }

  render () {
    const accesstoken = this.props.entry.getIn(['userInfo', 'accesstoken']);
    return (
      <ConnectedRouter history={ history }>
        <ScrollTop>
          <article className='container-fluid'>
            <Header { ...this.props }/>
            <Breadcrumb entry={ this.props.entry }/>
            <Switch>
              <Route path='/' exact component={ Home }/>
              <Route path='/detail/:id?' component={ Detail }/>
              <Route path='/topic/:id?' render={ (props) => (
                accesstoken ? (
                  <PostTopic { ...props }/>
                ) : (
                  <Redirect to="/"/>
                )) }/>
              <Route path='/user/:name' component={ UserInfoByName }/>
              <Route path='/api' component={ Api }/>
              <Route path='/intro' component={ Intro }/>
              <Route path='/messages' render={ (props) => (
                accesstoken ? (
                  <Message { ...props }/>
                ) : (
                  <Redirect to="/"/>
                )) }/>
              <Route component={ NotFound }/>
            </Switch>
            <Footer/>
            <BackToTop show={ this.state.show }/>
            {
              this.props.app.getIn(['dialog', 'message']) && <Alert type={ this.props.app.getIn(['dialog', 'type']) } message={ this.props.app.getIn(['dialog', 'message']) } handleCloseDialog={ this.handleCloseDialog }/>
            }
          </article>
        </ScrollTop>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps (state) {
  return {
    router: state.get('router'),
    entry: state.get('entry'),
    app: state.get('app')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


