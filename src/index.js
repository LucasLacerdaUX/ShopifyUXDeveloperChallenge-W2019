import React from "react";
import { render } from "react-dom";

import "./styles/styles.scss";
import "./index.scss";

import LoginForm from "./components/LoginForm/LoginForm";
import ACMEPanel from "./components/ACMEPanel/ACMEPanel"
import LoginPanel from "./components/LoginPanel/LoginPanel";

const App = () => (
  <main className="Wrapper">
    <LoginPanel></LoginPanel>
    <ACMEPanel></ACMEPanel>
  </main>
);

render(<App />, document.getElementById("app"));
    