import React from "react";
import { render } from "react-dom";

import "./styles/styles.scss";
import LoginForm from "./components/LoginForm/LoginForm";

const App = () => (
  <div>
    <h1>Hi There</h1>
    <LoginForm></LoginForm>
  </div>
);

render(<App />, document.getElementById("app"));
    