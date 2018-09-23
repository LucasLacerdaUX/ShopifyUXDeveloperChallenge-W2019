import React from "react";
import PropTypes from "prop-types";
import "./CircleButton.scss";

const CircleButton = ({ name, desc, children }) => (
  <a id={name} className="CircleButton" href={`#${name}`} title={desc}>
    {children}
  </a>
);

CircleButton.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default CircleButton;
