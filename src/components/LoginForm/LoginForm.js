import React, { PureComponent } from 'react'
import './LoginForm.scss';
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

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
      <div className="FormWrapper">
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
          inputSet.map(inputElement => {
            const errorTag = (<span key={inputElement.id}>{inputElement.config.validation.errorMsg}</span>);
            return !inputElement.config.valid && inputElement.config.touched ? errorTag : null; 
          })       
        }
        </div>
      </div>

      <CustomCheckbox inputName="rememberCheckBox" fieldDescription="Checking this will keep your account logged in the next time you visit this website.">remember me</CustomCheckbox>
      </React.Fragment>
    )
  }
}

export default LoginForm
