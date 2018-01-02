import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import Badge from '../Badge';

export default class HomeList extends Component {
  constructor (props) {
    super(props);
    this.handleClickRow = this.handleClickRow.bind(this);
  }

  static propTypes = {
    list: PropTypes.object.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return !is(this.props.list.get('result'), nextProps.list.get('result'));
  }

  componentDidUpdate () {
    console.log('home list update');
  }

  handleClickRow (id) {
    this.props.history.push(`/detail/${id}`);
  }

  render () {
    const result = this.props.list.get('result');
    return (
      <ul className="list-group">
        {
          result.map(item => (
            <li className="list-group-item" key={ item.id } onClick={ () => this.handleClickRow(item.id) }>
              <Badge { ...item }/>
              <span className='overflow-ellipsis col-9 px-0'>
                      { item.title }
                    </span>
              <span className='overflow-ellipsis col-2 px-0 text-right'>
                      { `${item.reply_count}/${item.visit_count}` }
                    </span>
            </li>
          ))
        }
      </ul>
    );
  }
}
