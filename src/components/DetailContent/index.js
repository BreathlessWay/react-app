import React, { PureComponent } from 'react';
import './style.less';

export default class DetailContent extends PureComponent {
  componentDidUpdate () {
    console.log('detail content is updated');
  }

  render () {
    return (
      <section dangerouslySetInnerHTML={ {__html: this.props.content} } className='detail-index-content'/>
    );
  }
}
