import React from "react";
import PropTypes from "prop-types";
import "./LiveError.scss";

const LiveError = ({ children }) => (
  <div className="Errors" role="alert" aria-live="assertive" aria-atomic="true">
    {children}
  </div>
);

LiveError.propTypes = {
  children: PropTypes.node.isRequired
};

export default LiveError;
