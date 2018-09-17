import React, { Component } from 'react'
import './LoginForm.scss';
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";

export class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <Input isInvalid={!this.props.username.valid && this.props.username.touched} 
               inputType="text" 
               inputName="username" 
               value={this.props.username.value} 
               changeText={this.props.inputChange} 
               changeFocus={this.props.inputBlur} 
               label="Enter your username" 
               defaultPlaceholder="username" 
               fieldDescription="Your username is expected to be between 8 and 24 characters"
               required
               autoFocus>
        </Input>

        <Input isInvalid={!this.props.password.valid && this.props.password.touched}
               inputType="password" 
               inputName="password" 
               value={this.props.password.value} 
               changeText={this.props.inputChange} 
               changeFocus={this.props.inputBlur} 
               label="Enter your password" 
               defaultPlaceholder="password"
               fieldDescription="Your password is expected to be between 8 and 24 characters" 
               required>
        </Input>
        <SubmitButton loginUser={this.props.loginUser} spinning={this.props.spinning}></SubmitButton>
      </form>
    )
  }
}

export default LoginForm
