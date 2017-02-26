/**
 * The component from '/components/auth/Login.js' container.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component } from 'react';
import LoginComponent from '../../components/auth/Login';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      access: '',
      password: '',
    }

    this.loginHandle = () => this.onLogin();
    this.changeAccessTextHandle = access => this.onChangeStateText('access', access);
    this.changePasswordTextHandle = password => this.onChangeStateText('password', password);

  }

  render() {

    return (
      <LoginComponent
        onLogin={this.loginHandle}
        onChangeAccess={this.changeAccessTextHandle}
        onchangePassword={this.changePasswordTextHandle}
      />
    );
  }

  onChangeStateText(key, value) {
    const state = {
      ...this.state,
      [key]: value
    };
    this.setState(state);
  }

  onLogin() {
    console.log(this.state);
  }
}

export default Login;
