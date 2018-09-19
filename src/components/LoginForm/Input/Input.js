import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = props => {
  const {
    inputName,
    inputType,
    inputPlaceholder,
    inputDesc,
    inputValue,
    changeText,
    changeFocus,
    isInvalid,
    label,
    ...otherProps
  } = props;

  return (
    <div className="Input">
      <label htmlFor={inputName} className="visually-hidden">
        {label}
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
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  inputDesc: PropTypes.string,
  changeText: PropTypes.func,
  changeFocus: PropTypes.func,
  isInvalid: PropTypes.bool
};

Input.defaultProps = {
  inputValue: "",
  inputPlaceholder: "",
  inputDesc: "",
  isInvalid: false,
  changeText: null,
  changeFocus: null
};

export default Input;
