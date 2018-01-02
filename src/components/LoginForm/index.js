import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    });
  }

  handleCloseModal () {
    this.props.handleCloseModal();
  }

  handleSubmit () {
    if (!this.state.value.trim()) {
      this.setState({
        errorMessage: '请输入accessToken'
      });
    } else {
      this.props.entryUser(this.state.value)
      .then(res => {
        const userInfo = JSON.stringify({...res.payload.data, ...{accesstoken: this.state.value}});
        sessionStorage.setItem('userInfo', userInfo);
        res.payload.data.success && this.props.handleCloseModal();
        window.history.go();
      })
      .catch(err => {
          this.setState({
            errorMessage: err.error.response && err.error.response.data.error_msg
          });
        }
      );
    }
  }

  render () {
    return (
      <section>
        <div className="modal-body">
          <form className='row justify-content-center' onSubmit={ e => e.preventDefault() }>
            <div className='row col-10'>
              <label htmlFor="inputPassword" className="col-3 col-form-label px-0">AccessToken</label>
              <div className="col-9">
                <input type="text" className="form-control" id="inputPassword" placeholder="AccessToken" value={ this.state.value } onChange={ this.handleChange }/>
                <p className='text-danger mt-1' style={ {fontSize: '12px'} }>{ this.state.errorMessage }</p>
              </div>
            </div>
          </form>
          <p className='text-info mt-3' style={ {fontSize: '12px'} }>如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={ this.handleCloseModal }>取消</button>
          <button type="button" className="btn btn-primary" onClick={ this.handleSubmit }>确定</button>
        </div>
      </section>
    );
  }
}
