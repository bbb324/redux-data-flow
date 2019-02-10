/**
 * Created by junxie on 18/5/27.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';

require('./login.less')

class Login extends Component {
  constructor() {
    super(...arguments);
  }

  loginAction() {
    console.log('登2陆')
    this.props.history.push('/editor');
  }

  render() {
    return (
      <div className="login-div">
        <img src="" className="logo"/>
        <input className="account base-input"/>
        <input className="password base-input"/>
        <span className="button base-button" onClick={this.loginAction.bind(this)}>登陆</span>
        <span>立即1注册</span>
        <span>忘记密码？</span>
      </div>
    )
  }
}

export default Login;