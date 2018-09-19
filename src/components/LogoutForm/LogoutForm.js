import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./LogoutForm.scss";

class LogoutForm extends PureComponent {
  static propTypes = {
    mainTitle: PropTypes.string,
    mainDesc: PropTypes.string,
    btnText: PropTypes.string,
    btnAction: PropTypes.func
  };

  static defaultProps = {
    mainTitle: "Congratulations",
    mainDesc: "You have successfully logged in.",
    btnText: "sign out",
    btnAction: null
  };

  // Acessibility: autoFocus on the logout message
  componentDidMount() {
    this.logoutMessage.focus();
  }

  render() {
    const { mainTitle, mainDesc, btnText, btnAction } = this.props;
    return (
      <div className="LogoutForm">
        <div className="LogoutForm__Content">
          <div
            className="LogoutForm__Text"
            ref={logoutMessage => {
              this.logoutMessage = logoutMessage;
            }}
            tabIndex="-1"
          >
            <h2>{mainTitle}</h2>
            <h3>{mainDesc}</h3>
          </div>
          <button type="button" onClick={btnAction}>
            {btnText}
          </button>
        </div>
      </div>
    );
  }
}

export default LogoutForm;
