import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import $ from '$';

export default class BackToTop extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    show: PropTypes.bool.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return this.props.show !== nextProps.show;
  }

  componentDidUpdate () {
    console.log('back to top is updated');
  }

  handleClick () {
    const backTop = () => {
      requestAnimationFrame(() => {
        const _top = $(document).scrollTop(),
          speed = _top / 6;
        if (_top > 0) {
          $(document).scrollTop(_top - speed);
          backTop();
        }
      });
    };

    backTop();
  }

  render () {
    return (
      this.props.show ? <aside className='back-top' onClick={ this.handleClick }>
        <p>回</p>
        <p>到</p>
        <p>顶</p>
        <p>部</p>
      </aside> : ''
    );
  }
}
