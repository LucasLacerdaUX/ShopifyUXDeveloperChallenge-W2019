import React from 'react'
import "./Input.scss";

const Login = (props) => {
  return (
    <div className="Input">
      <label 
        htmlFor={props.inputName}
        className="visually-hidden"
      >
        {props.label}
      </label>
      <input 
        type={props.inputType} 
        name={props.inputName}
        id={props.inputName}
        aria-required={props.isRequired}
        placeholder={props.defaultPlaceholder}
        value={props.inputValue}
        onChange={props.onChange}
      ></input>
      <span class="visually-hidden">{props.fieldDescription}</span>
    </div>
  )
}

export default Login;
