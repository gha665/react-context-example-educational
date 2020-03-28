import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MyProvider } from "./context";

ReactDOM.render(
  // wrap the whole application with MyProvider component
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
