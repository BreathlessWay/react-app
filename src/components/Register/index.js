import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal () {
    this.props.handleCloseModal();
  }

  render () {
    return (
      <section>
        <div className="modal-body">
          暂未开放注册功能哦
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={ this.handleCloseModal }>确定</button>
        </div>
      </section>
    );
  }
}
