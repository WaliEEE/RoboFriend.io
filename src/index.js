import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App"
import reportWebVitals from "./reportWebVitals";
/******For Styling*****/
import 'tachyons';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
