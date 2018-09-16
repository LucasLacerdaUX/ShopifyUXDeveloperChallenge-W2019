import React from "react";
import { render } from "react-dom";

import "./styles.scss";

const App = () => (
  <div>
    <h1>Hi There</h1>
  </div>
);

render(<App />, document.getElementById("app"));
