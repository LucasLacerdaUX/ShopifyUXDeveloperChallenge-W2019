import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPanel.scss";

export class LoginPanel extends Component {
  render() {
    return (
      <div class="LoginPanel">
        <LoginForm></LoginForm>
        <div className="CustomCheckbox">
          <input type="checkbox" id="checkbox-2" name="checkboxe" />
          <label for="checkbox-2">remember me</label>
        </div>
      </div>
    )
  }
}

export default LoginPanel
