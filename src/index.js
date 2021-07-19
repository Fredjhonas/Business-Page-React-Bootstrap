import React from "react";
import ReactDOM from "react-dom";
import "./config/i18n";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./assets/styles/App.scss";

import App from "./routes/App";

ReactDOM.render(<App />, document.getElementById("app"));
