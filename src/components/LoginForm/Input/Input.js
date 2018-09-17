import React from 'react'
import "./Input.scss";

const Login = (props) => {
  const {inputName, inputType, inputValue, defaultPlaceholder, changeText, changeFocus, fieldDescription, isInvalid, label, ...rest} = props;
  let cssClasses = '';
  if (isInvalid) cssClasses = 'invalid';

  return (
    <div className="Input">
      <label 
        htmlFor={inputName}
        className="visually-hidden"
      >
        {label}
      </label>
      <input 
        className={cssClasses}
        type={inputType} 
        name={inputName}
        id={inputName}
        placeholder={defaultPlaceholder}
        value={inputValue}
        onChange={changeText}
        onBlur={changeFocus}
        aria-describedby={`${inputName}-hint`}
        {...rest}
      ></input>
      <span className="visually-hidden" id={`${inputName}-hint`}>{fieldDescription}</span>
    </div>
  )
}

export default Login;
