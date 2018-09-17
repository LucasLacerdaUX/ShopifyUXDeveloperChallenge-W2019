import React from 'react'
import "./CustomCheckbox.scss"

const CustomCheckbox = (props) => {
  return (
    <div className="CustomCheckbox">
        <input type="checkbox" id={props.inputName} name={props.inputName} aria-describedBy={`${props.inputName}-hint`}/>
        <label htmlFor={props.inputName}>{props.children}</label>
        <span class="visually-hidden" id={`${props.inputName}-hint`}>{props.fieldDescription}</span>
    </div>
  )
}

export default CustomCheckbox
