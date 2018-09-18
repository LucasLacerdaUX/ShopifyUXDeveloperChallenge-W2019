import React, { PureComponent } from 'react'
import './LoginForm.scss';
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";

export class LoginForm extends PureComponent {
  render() {
    const inputSet = [];
    for (let key in this.props.fields) {
      inputSet.push({
          id: key,
          config: this.props.fields[key]
      });
    }
    return (
      <React.Fragment>
      <form className="LoginForm" onSubmit={this.props.loginUser}>
        { inputSet.map(inputElement => (
            <Input
              key={inputElement.id} 
              inputName={inputElement.id}
              inputType={inputElement.config.inputConfig.type}
              value={inputElement.config.value}
              isInvalid={!inputElement.config.valid && inputElement.config.touched}
              label={inputElement.config.inputConfig.label}
              defaultPlaceholder={inputElement.config.inputConfig.placeholder}
              fieldDescription={inputElement.config.inputConfig.fieldDescription}
              changeText={this.props.inputChange} 
              changeFocus={this.props.inputBlur} 
              aria-required={inputElement.config.validation.required}
              autoFocus={inputElement.config.inputConfig.autofocus}
              autoComplete={inputElement.config.inputConfig.autoCompleteProp}
            />
          )) 
        }
        <SubmitButton spinning={this.props.spinning}></SubmitButton>
      </form>
      <div className="Errors" role="alert" aria-atomic="true">
      { 
        inputSet.map(inputElement => (
          <span key={inputElement.id}>
            { (!inputElement.config.valid && inputElement.config.touched) ? inputElement.config.validation.errorMsg : null }
          </span>
        ))       
      }
      </div>
      </React.Fragment>
    )
  }
}

export default LoginForm
