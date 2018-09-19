import React from "react";
import PropTypes from "prop-types";
import "./LogoutForm.scss";

const LogoutForm = props => {
  const { mainTitle, mainDesc, btnText, btnAction } = props;
  return (
    <div className="LogoutForm">
      <div className="LogoutForm__Content">
        <div>
          <h2>{mainTitle}</h2>
          <h3>{mainDesc}</h3>
        </div>
        <button type="button" onClick={btnAction}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

LogoutForm.propTypes = {
  mainTitle: PropTypes.string,
  mainDesc: PropTypes.string,
  btnText: PropTypes.string,
  btnAction: PropTypes.func
};

LogoutForm.defaultProps = {
  mainTitle: "Congratulations",
  mainDesc: "You have successfully logged in.",
  btnText: "sign out",
  btnAction: null
};

export default LogoutForm;
