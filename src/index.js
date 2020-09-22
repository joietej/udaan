import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register({
  onUpdate: (reg) => {
    store.dispatch({
      type: "APP_UPDATE_FOUND",
      data: {
        waitingWorker: reg.waiting,
        message: "📢 Reload for the latest juicy changes",
      },
    });
  },
});
