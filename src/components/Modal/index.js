import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import './style.less';

export default class Modal extends Component {
  constructor (props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    show: false,
    title: ''
  };

  static propTypes = {
    show: PropsTypes.bool.isRequired,
    title: PropsTypes.string.isRequired,
    children: PropsTypes.element,
    handleCloseModal: PropsTypes.func.isRequired,
    handleSubmit: PropsTypes.func.isRequired
  };

  handleCloseModal () {
    this.props.handleCloseModal();
  }

  handleSubmit () {
    this.props.handleSubmit();
  }

  render () {
    const {show, title} = this.props;
    show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    return (
      <article className='modal-index'>
        <div id="modal" className={ show ? 'modal fade show' : 'modal fade' } tabIndex="-1" style={ {'display': show ? 'block' : 'none'} } onClick={ this.handleCloseModal }>
          <div className="modal-dialog modal-dialog-centered" role="document" onClick={ e => e.stopPropagation() }>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-title">{ title }</h5>
                <button type="button" className="close">
                  <span aria-hidden="true" onClick={ this.handleCloseModal }>×</span>
                </button>
              </div>
              { this.props.children }
            </div>
          </div>
        </div>
        <div className={ show ? 'modal-backdrop fade show' : 'modal-backdrop fade' } style={ {'display': show ? 'block' : 'none'} }/>
      </article>
    );
  }
}
