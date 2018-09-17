import React from 'react'
import "./Input.scss";

const Login = (props) => {
  const {inputName, inputType, inputValue, defaultPlaceholder, onChange, fieldDescription, label, ...rest} = props;

  return (
    <div className="Input">
      <label 
        htmlFor={inputName}
        className="visually-hidden"
      >
        {label}
      </label>
      <input 
        type={inputType} 
        name={inputName}
        id={inputName}
        placeholder={defaultPlaceholder}
        value={inputValue}
        onChange={onChange}
        {...rest}
      ></input>
      <span className="visually-hidden">{fieldDescription}</span>
    </div>
  )
}

export default Login;
