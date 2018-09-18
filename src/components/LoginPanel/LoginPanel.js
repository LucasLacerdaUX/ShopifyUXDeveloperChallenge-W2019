import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPanel.scss";
import SocialLinks from '../SocialLinks/SocialLinks';
import LogoutForm from '../LogoutForm/LogoutForm';

class LoginPanel extends Component {
  state = {
    fields: {
      username:
      {
        inputConfig:
        {
          autofocus: true,
          autoCompleteProp: "off",
          type: 'text',
          placeholder: 'username',
          label: "Enter your username",
          fieldDescription: "Your username is expected to be between 6 and 24 characters"
        },
        value: '',
        valid: false,
        validation:
        {
          required: true,
          minCh: 6,
          maxCh: 24,
          errorMsg: "username must be between 6 and 24 characters."
        },
        touched: false,
      },
      password:
      {
        inputConfig:
        {
          autoCompleteProp: "off",
          type: 'password',
          placeholder: 'password',
          label: "Enter your password",
          fieldDescription: "Your password is expected to be between 8 and 24 characters"
        },
        value: '',
        valid: false,
        validation:
        {
          minCh: 8,
          maxCh: 24,
          errorMsg: "password must be between 8 and 24 characters."
        },
        touched: false,
      }
    },
    spinning: false,
    loggedIn: false
  }

  // Two-way binding
  handleInputChanged = (event) => {
    const field = event.target.name;
    
    // Get the fields
    const updatedFields = {
      ...this.state.fields
    };
    // 
    const updatedInput = { 
      ...updatedFields[field]
    };
  
    updatedInput.value = event.target.value;
    
    // Only checks for onChange if the input is invalid
    // Otherwise, it could give users an error while they are still typing a valid value
    // That is bad UX!
    if (!updatedInput.valid && updatedInput.touched)
    {
      updatedInput.valid = this.isFieldValid(updatedInput.value, updatedInput.validation);
    }

    updatedFields[field] = updatedInput;

    this.setState({fields: updatedFields});
  }

  handleBlur = (event) => {
    const field = event.target.name;
    // Get the fields
    const updatedFields = {
      ...this.state.fields
    };
    // Set to touched
    const updatedInput = { 
      ...updatedFields[field]
    };

    // Only set the element to touched if the value isn't empty
    // That happens only on the first time. If the element has already been touched,
    // the next time it's made empty, it's going to give an error.
    if (updatedInput.value.trim() != '' ) 
      updatedInput.touched = true;
    updatedInput.valid = this.isFieldValid(updatedInput.value, updatedInput.validation);

    updatedFields[field] = updatedInput;

    this.setState( { fields: updatedFields }, this.validateFields);
  }

  isFieldValid(value, rules)
  {
    let validField = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
        validField = value.trim() !== '' && validField;
    }

    if (rules.minCh) {
        validField = value.length >= rules.minCh && validField;
    }

    if (rules.maxCh) {
        validField = value.length <= rules.maxCh && validField;
    }

    return validField;
  }

  isFormValid = () => {
    let formValid = true;
    
    const updatedFields = {
      ...this.state.fields
    };

    for (let input in updatedFields) {
        updatedFields[input].touched = true;
        updatedFields[input].valid = this.isFieldValid(updatedFields[input].value, updatedFields[input].validation);
        formValid = updatedFields[input].valid && formValid;
    }

    this.setState({ fields: updatedFields });
    return formValid;
  }

  handleLogin = (event) => {
    event.preventDefault();
    const formValid = this.isFormValid();
    
    if (formValid)
    {
      this.setState( { spinning: true });
      setTimeout(() => {
        this.setState( { spinning: false, loggedIn: true } );
      }, 2000);
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    const updatedFields = {
      ...this.state.fields
    };

    // Clean form data
    for (let input in updatedFields) {
        updatedFields[input].touched = false;
        updatedFields[input].valid = false;
        updatedFields[input].value = '';
    }

    this.setState( { fields: updatedFields, spinning: false, loggedIn: false });
  }

  renderLogin()
  {
    return (
      <div className="LoginPanel">
        <LoginForm 
          fields={this.state.fields}
          inputChange={this.handleInputChanged}
          inputBlur={this.handleBlur}
          loginUser={this.handleLogin}
          spinning={this.state.spinning}
        ></LoginForm>
        <SocialLinks></SocialLinks>
      </div>
    )
  }

  renderLogout()
  {
    return (
      <React.Fragment>
        <LogoutForm logoutUser={this.handleLogout}></LogoutForm>
      </React.Fragment>
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
