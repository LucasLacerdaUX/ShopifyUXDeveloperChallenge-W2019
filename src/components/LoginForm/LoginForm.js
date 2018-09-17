import React, { Component } from 'react'
import './LoginForm.scss';
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";

export class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <Input inputType="text" inputName="username" required="true" label="Enter your username" defaultPlaceholder="username"
            fieldDescription="Your username is expected to be between 8 and 24 characters" required autoFocus></Input>
        <Input inputType="password" inputName="password" required="true" label="Enter your password" defaultPlaceholder="password"
            fieldDescription="Your password is expected to be between 8 and 24 characters" required></Input>
        <SubmitButton></SubmitButton>
      </form>
    )
  }
}

export default LoginForm
