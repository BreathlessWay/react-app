import React, { Component } from 'react';
import './style.less';
import PropTypes from 'prop-types';

export default class Alert extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: null
    };
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleCloseDialog: PropTypes.func.isRequired
  };

  componentDidMount () {
    this.setState({
      time: setTimeout(() => {
        this.props.handleCloseDialog();
      }, 300000)
    });
  }

  componentWillUnmount () {
    window.clearTimeout(this.state.time);
  }

  render () {
    const {type, message, handleCloseDialog} = this.props;
    return (
      <div className={ `alert alert-${type} alert-dismissible fade col-4 alert-tab show` } role="alert">
        { message }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={ () => handleCloseDialog() }>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}


