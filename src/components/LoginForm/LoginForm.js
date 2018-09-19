import React from "react";
import PropTypes from "prop-types";
import "./LoginForm.scss";
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const LoginForm = props => {
  const { fields, formSubmit, inputChange, inputBlur, spinning } = props;
  let inputSet = [];

  inputSet = Object.keys(fields).map(key => ({
    id: key,
    config: fields[key]
  }));

  return (
    <React.Fragment>
      <div className="FormWrapper">
        <form className="LoginForm" onSubmit={formSubmit}>
          {inputSet.map(inputElement => (
            <Input
              key={inputElement.id}
              inputName={inputElement.id}
              inputType={inputElement.config.inputConfig.type}
              value={inputElement.config.value}
              isInvalid={
                !inputElement.config.valid && inputElement.config.touched
              }
              aria-invalid={
                !inputElement.config.valid && inputElement.config.touched
              }
              label={inputElement.config.inputConfig.label}
              inputPlaceholder={inputElement.config.inputConfig.placeholder}
              inputDesc={inputElement.config.inputConfig.fieldDescription}
              changeText={inputChange}
              changeFocus={inputBlur}
              aria-required={inputElement.config.validation.required}
              autoFocus={inputElement.config.inputConfig.autofocus}
              autoComplete={inputElement.config.inputConfig.autoCompleteProp}
            />
          ))}
          <SubmitButton spinning={spinning} />
        </form>
        <div className="Errors" role="alert" aria-live="assertive">
          {inputSet.map(inputElement => {
            const errorTag = (
              <span key={inputElement.id}>
                {inputElement.config.validation.errorMsg}
              </span>
            );
            return !inputElement.config.valid && inputElement.config.touched
              ? errorTag
              : null;
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
  spinning: PropTypes.bool
};

LoginForm.defaultProps = {
  inputChange: null,
  inputBlur: null,
  spinning: false
};

export default LoginForm;
