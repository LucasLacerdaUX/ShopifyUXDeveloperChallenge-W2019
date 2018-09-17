import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPanel.scss";
import SocialLinks from '../SocialLinks/SocialLinks';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

class LoginPanel extends Component {
  state = {
    username: 
    {
      value: '',
      valid: false,
      validation:
      {
        minCh: 8,
        maxCh: 24
      },
      touched: false,
      errorMsg: "username must be between 8 and 24 characters"
    },
    password: 
    {
      value: '',
      valid: false,
      validation:
      {
        minCh: 8,
        maxCh: 24
      },
      touched: false,
      errorMsg: "password must be between 8 and 24 characters"
    },
    spinning: false,
    currentError: '',
    loggedIn: false
  }

  renderLogout()
  {
    return (
      <div>
        oi
      </div>
    )
  }

  // Two-way binding
  handleInputChanged = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const updatedState = { ...this.state[field], value };

    this.setState({
       [field] : updatedState } );
    }

  handleBlur = (event) => {
    const field = event.target.name;
    const isValid = this.state[field].value.length >= 8 && this.state[field].value.length <= 24;

    const updatedState = { ...this.state[field], touched: true, valid: isValid };
    this.setState( { [field]: updatedState });
  }

  validateFields = () =>
  {
    const userInvalid = !this.state.username.valid && this.state.username.touched;
    const passInvalid = !this.state.password.valid && this.state.password.touched;
    
    let newError = null;

    if (userInvalid && !passInvalid)
      newError =  this.state.username.errorMsg;
    else if (!userInvalid && passInvalid)
      newError =  this.state.password.errorMsg;
    else if (userInvalid && passInvalid)
      newError =  "both username and password must be between 8 and 24 characters"
    else
      newError =  null;

    this.setState({currentError:newError});
  }

  handleLogin = (event) => {
    event.preventDefault();
    const formValid = (this.state.username.valid && this.state.password.valid);
    if (formValid)
    {
      this.setState( { spinning: true });
      
      setTimeout(() => {
        this.setState( { spinning: false, loggedIn: true } );
      }, 2000);
    } else {
      this.validateFields();
    }
  }

  renderLogin()
  {
    return (
      <div className="LoginPanel">
        <LoginForm 
          inputChange={this.handleInputChanged}
          inputBlur={this.handleBlur}
          username={this.state.username}
          password={this.state.password}
          loginUser={this.handleLogin}
          spinning={this.state.spinning}
        ></LoginForm>
        <span role="alert" aria-atomic="true" style={{color: 'red'}}>{this.state.currentError}</span>
        <CustomCheckbox inputName="rememberCheckBox" fieldDescription="Checking this will keep your account logged in the next time you visit this website.">remember me</CustomCheckbox>
        <SocialLinks></SocialLinks>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        { this.state.loggedIn ? this.renderLogout() : this.renderLogin() }
      </React.Fragment>
    )
  }
}

export default LoginPanel
