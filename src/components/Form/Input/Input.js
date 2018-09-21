import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({
  inputName,
  inputType,
  inputPlaceholder,
  inputDesc,
  inputValue,
  changeText,
  changeFocus,
  isInvalid,
  labelText,
  ...otherProps
}) => (
  <div className="Input">
    <label htmlFor={inputName} className="visually-hidden">
      {labelText}
    </label>
    <input
      className={isInvalid ? "invalid" : null}
      type={inputType}
      name={inputName}
      id={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={changeText}
      onBlur={changeFocus}
      aria-describedby={`${inputName}-hint`}
      {...otherProps}
    />
    <span className="visually-hidden" id={`${inputName}-hint`}>
      {inputDesc}
    </span>
  </div>
);

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(["text", "password", "email"]),
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputDesc: PropTypes.string,
  changeText: PropTypes.func,
  changeFocus: PropTypes.func,
  isInvalid: PropTypes.bool
};

Input.defaultProps = {
  inputType: "text",
  inputValue: "",
  inputPlaceholder: "",
  inputDesc: "",
  isInvalid: false,
  changeText: null,
  changeFocus: null
};

export default Input;
