import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPanel.scss";
import SocialLinks from '../SocialLinks/SocialLinks';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

export class LoginPanel extends Component {
  render() {
    return (
      <div className="LoginPanel">
        <LoginForm></LoginForm>
        <span aria-role="alert" aria-assertive="true" style={{color: 'red'}}>Erro!</span>
        <CustomCheckbox inputName="rememberCheckBox" fieldDescription="Checking this will keep your account logged in the next time you visit this website.">remember me</CustomCheckbox>
        <SocialLinks></SocialLinks>
      </div>
    )
  }
}

export default LoginPanel
