/**
 * The component from '/components/auth/Login.js' container.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component } from 'react';
import LoginComponent from '../../components/auth/Login';
import { login } from '../../utils/auth';

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

    fetch('https://www.baidu.com')
      .then(res => console.log(res));

    // const { access, password } = this.state;
    // // console.log(access, password);
    // const res = login(access, password);

    // // console.log(res);

    // res.then(response => console.log(response));

    // res.catch(error => console.log(error));

      // .then(response => console.log(response))
      // .catch(error => console.log(...error));
  }
}

export default Login;
