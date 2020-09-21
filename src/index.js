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
    reg.postMessage({ data: { type: "SKIP_WAITING" } });
    store.dispatch({
      type: "APP_SET_FOOTERMESSAGE",
      data: {
        reg,
        message: "📢 Reload for the latest juicy changes",
      },
    });
  },
});
