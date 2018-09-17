import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPanel.scss";

export class LoginPanel extends Component {
  render() {
    return (
      <div class="LoginPanel">
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default LoginPanel
