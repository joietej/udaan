import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./app/store";

const dispatchUpdateMessage = (reg) =>
  store.dispatch({
    type: "APP_UPDATE_FOUND",
    data: {
      waitingWorker: reg.waiting || reg,
      message: "Update for the latest juicy changes",
    },
  });

  const dispatchUpdatedMessage = (msg) =>
  store.dispatch({
    type: "APP_UPDATE_COMPLETED",
    data: {
      message: msg,
    },
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register({
  onUpdate: (reg) => dispatchUpdateMessage(reg),
  onWaiting: (reg) => dispatchUpdateMessage(reg),
  onActivated: () => dispatchUpdatedMessage('🎉 App Updated'),
  onSuccess:() => dispatchUpdatedMessage('✔ App is ready'),
});
