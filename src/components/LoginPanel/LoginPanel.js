import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPanel.scss";
import SocialLinks from '../SocialLinks/SocialLinks';

export class LoginPanel extends Component {
  render() {
    return (
      <div className="LoginPanel">
        <LoginForm></LoginForm>
        <span style={{color: 'red'}}>Erro!</span>
        <div className="CustomCheckbox">
          <input type="checkbox" id="checkbox-2" name="checkboxe" />
          <label htmlFor="checkbox-2">remember me</label>
        </div>
        <SocialLinks></SocialLinks>
      </div>
    )
  }
}

export default LoginPanel
