import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import "fontsource-roboto";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store";

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
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register({
  onUpdate: (reg) => dispatchUpdateMessage(reg),
  onWaiting: (reg) => dispatchUpdateMessage(reg),
  onActivated: () => dispatchUpdatedMessage("🎉 App Updated"),
  onSuccess: () => dispatchUpdatedMessage("✔ App is ready"),
});
