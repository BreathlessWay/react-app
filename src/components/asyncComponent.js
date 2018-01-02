import React, { Component } from 'react';
import actions from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor (props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount () {
      const {default: component} = await importComponent();
      this.setState({
        component: component
      });
    }

    render () {
      const C = this.state.component;

      return C ? <C { ...this.props } /> : null;
    }
  }

  function mapStateToProps (state) {
    return {
      list: state.getIn(['home', 'list']),
      entry: state.get('entry'),
      router: state.get('router')
    };
  }

  function mapDispatchToProps (dispatch) {
    return bindActionCreators(actions, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent);

}
