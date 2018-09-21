import React from "react";
import PropTypes from "prop-types";
import "./LoginForm.scss";
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const LoginForm = props => {
  const {
    fields,
    formSubmit,
    inputChange,
    inputBlur,
    loading,
    errorRenderKey
  } = props;

  return (
    <React.Fragment>
      <div className="FormWrapper">
        <form className="LoginForm" onSubmit={formSubmit}>
          {Object.keys(fields).map(key => {
            const inputElement = fields[key];
            const invalid = !inputElement.valid && inputElement.touched;
            return (
              <Input
                key={key}
                inputName={key}
                inputType={inputElement.config.type}
                value={inputElement.value}
                isInvalid={invalid}
                aria-invalid={invalid}
                labelText={inputElement.config.label}
                inputPlaceholder={inputElement.config.placeholder}
                inputDesc={inputElement.config.description}
                changeText={inputChange}
                changeFocus={inputBlur}
                aria-required={inputElement.validation.required}
                autoFocus={inputElement.config.autofocus}
                autoComplete={inputElement.config.autoCompleteProp}
              />
            );
          })}
          <SubmitButton loading={loading}>login</SubmitButton>
        </form>
        <div
          className="Errors"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {Object.keys(fields).map(key => {
            const inputElement = fields[key];
            const invalid = !inputElement.valid && inputElement.touched;
            return (
              invalid && (
                <span key={`${errorRenderKey}-${key}`}>
                  {inputElement.validation.errorMsg}
                </span>
              )
            );
          })}
        </div>
      </div>

      <CustomCheckbox
        inputName="rememberCheckBox"
        fieldDescription="Checking this will keep your account logged in the next time you visit this website."
      >
        remember me
      </CustomCheckbox>
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  formSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func,
  inputBlur: PropTypes.func,
  loading: PropTypes.bool,
  errorRenderKey: PropTypes.number
};

LoginForm.defaultProps = {
  inputChange: null,
  inputBlur: null,
  loading: false,
  errorRenderKey: 0
};

export default LoginForm;
