import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.less';
import { is } from 'immutable';

export default class Breadcrumb extends Component {
  static propTypes = {
    entry: PropTypes.object.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.entry, nextProps.entry);
  }

  componentDidUpdate () {
    console.log('breadcrumb is updated');
  }

  render () {
    const breadcrumb = this.props.entry.get('breadcrumb'), len = breadcrumb.size - 1;
    return (
      <nav aria-label="breadcrumb" className='breadcrumb'>
        <ol className="breadcrumb container py-3">
          {
            breadcrumb.map((item, index) => {
              if (index === len) {
                return (
                  <li className='breadcrumb-item active' key={ index } aria-current='page'>{ item.name }</li>
                );
              } else {
                return (
                  <li className='breadcrumb-item' key={ index }><Link to={ item.path }>{ item.name }</Link></li>
                );
              }
            })
          }
        </ol>
      </nav>
    );
  }
}
