import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./LogoutPanel.scss";

class LogoutPanel extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    mainTitle: PropTypes.string.isRequired,
    mainDesc: PropTypes.string,
    btnText: PropTypes.node.isRequired,
    btnAction: PropTypes.func.isRequired
  };

  static defaultProps = {
    loading: false,
    mainDesc: null
  };

  // Acessibility: autoFocus on the logout message
  componentDidMount() {
    this.logoutMessage.focus();
  }

  render() {
    const { loading, mainTitle, mainDesc, btnText, btnAction } = this.props;
    return (
      <div className="LogoutPanel">
        <div className="LogoutPanel__Content">
          <div
            className="LogoutPanel__Text"
            ref={logoutMessage => {
              this.logoutMessage = logoutMessage;
            }}
            tabIndex="-1"
          >
            <h2>{mainTitle}</h2>
            <h3>{mainDesc}</h3>
          </div>
          <Button btnType="button" loading={loading} btnAction={btnAction}>
            {btnText}
          </Button>
        </div>
      </div>
    );
  }
}

export default LogoutPanel;
