import React, { Component } from "react";
import { Form, SocialLinks, LogoutPanel } from "../../components";
import "./LoginPanel.scss";

class LoginPanel extends Component {
  state = {
    fields: {
      username: {
        config: {
          autofocus: true,
          autoCompleteProp: "off",
          type: "text",
          placeholder: "username",
          label: "Enter your username (required)",
          description:
            "Your username is expected to be between 6 and 24 characters"
        },
        value: "",
        valid: false,
        validation: {
          required: true,
          minCh: 6,
          maxCh: 24,
          errorMsg: "username must be between 6 and 24 characters."
        },
        touched: false
      },
      password: {
        config: {
          autoCompleteProp: "off",
          type: "password",
          placeholder: "password",
          label: "Enter your password (required)",
          description:
            "Your password is expected to be between 8 and 24 characters"
        },
        value: "",
        valid: false,
        validation: {
          required: true,
          minCh: 8,
          maxCh: 24,
          errorMsg: "password must be between 8 and 24 characters."
        },
        touched: false
      }
    },
    loading: false,
    loggedIn: false,
    formErrorCount: 0
  };

  handleInputChanged = event => {
    const inputName = event.target.name;
    const { fields } = this.state;

    const updatedFields = {
      ...fields
    };
    const updatedInput = {
      ...updatedFields[inputName]
    };

    updatedInput.value = event.target.value;

    // Only checks for onChange if the input is invalid and has already been touched
    // Otherwise, it could give users an error while they are still typing a valid value
    // That is bad UX!
    if (!updatedInput.valid && updatedInput.touched) {
      updatedInput.valid = this.isInputValid(
        updatedInput.value,
        updatedInput.validation
      );
    }

    updatedFields[inputName] = updatedInput;

    this.setState({ fields: updatedFields });
  };

  handleInputBlur = event => {
    const { fields } = this.state;
    const inputName = event.target.name;

    // Get the fields
    const updatedFields = {
      ...fields
    };
    const updatedInput = {
      ...updatedFields[inputName]
    };

    // Only set the element to touched if the value isn't empty
    // That happens only on the first time. If the element has already been touched,
    // the next time it's made empty, it's going to give an error.
    if (updatedInput.value.trim() !== "") {
      updatedInput.touched = true;
    }
    updatedInput.valid = this.isInputValid(
      updatedInput.value,
      updatedInput.validation
    );

    updatedFields[inputName] = updatedInput;

    this.setState({ fields: updatedFields });
  };

  isInputValid = (value, rules) => {
    let validField = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      validField = value.trim() !== "" && validField;
    }

    if (rules.minCh) {
      validField = value.length >= rules.minCh && validField;
    }

    if (rules.maxCh) {
      validField = value.length <= rules.maxCh && validField;
    }

    return validField;
  };

  isFormValid = () => {
    let formValid = true;
    const { fields } = this.state;

    const updatedFields = {
      ...fields
    };

    // Validate all fields, even if it hasn't been touched yet
    Object.keys(updatedFields).forEach(input => {
      updatedFields[input].touched = true;
      updatedFields[input].valid = this.isInputValid(
        updatedFields[input].value,
        updatedFields[input].validation
      );
      formValid = updatedFields[input].valid && formValid;
    });

    this.setState({ fields: updatedFields });
    return formValid;
  };

  handleLogin = event => {
    event.preventDefault();
    const formValid = this.isFormValid();
    if (!formValid) {
      this.setState(prevState => ({
        formErrorCount: prevState.formErrorCount + 1
      }));
      return;
    }

    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.setState({ loading: false, loggedIn: true });
      }, 1500);
    });
  };

  handleLogout = event => {
    event.preventDefault();
    const { fields } = this.state;
    const updatedFields = {
      ...fields
    };

    // Clean form data
    Object.keys(updatedFields).forEach(input => {
      updatedFields[input].touched = false;
      updatedFields[input].valid = false;
      updatedFields[input].value = "";
    });

    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.setState({
          fields: updatedFields,
          loading: false,
          loggedIn: false,
          formErrorCount: 0
        });
      }, 1500);
    });
  };

  render() {
    const { fields, loading, formErrorCount, loggedIn } = this.state;
    const renderLogin = (
      <div className="LoginPanel">
        <Form
          fields={fields}
          inputChange={this.handleInputChanged}
          inputBlur={this.handleInputBlur}
          formSubmit={this.handleLogin}
          loading={loading}
          errorRenderKey={formErrorCount}
        />
        <SocialLinks labelText="or login with" />
      </div>
    );
    const renderLogout = (
      <LogoutPanel
        btnAction={this.handleLogout}
        mainTitle="Congratulations"
        mainDesc="You have successfully logged in."
        btnText="sign out"
        loading={loading}
      />
    );
    return (
      <React.Fragment>{loggedIn ? renderLogout : renderLogin}</React.Fragment>
    );
  }
}

export default LoginPanel;
