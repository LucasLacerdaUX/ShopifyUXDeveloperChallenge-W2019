import React from "react";
import PropTypes from "prop-types";
import "./CustomCheckbox.scss";

const CustomCheckbox = ({ inputName, children, fieldDescription }) => (
  <div className="CustomCheckbox">
    <input
      type="checkbox"
      id={inputName}
      name={inputName}
      aria-describedby={`${inputName}-hint`}
    />
    <label htmlFor={inputName}>{children}</label>
    {fieldDescription && (
      <span className="visually-hidden" id={`${inputName}-hint`}>
        {fieldDescription}
      </span>
    )}
  </div>
);

CustomCheckbox.propTypes = {
  inputName: PropTypes.string.isRequired,
  fieldDescription: PropTypes.string,
  children: PropTypes.node
};

CustomCheckbox.defaultProps = {
  fieldDescription: null,
  children: null
};

export default CustomCheckbox;
