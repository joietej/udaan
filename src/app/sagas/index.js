import { all } from "redux-saga/effects";
import { watchSearchAsync, watchLoadLocationsAsync, watchLoadFlightOffersAsync } from "./search";
import { watchAuthenticateAsync, refreshTokenAsync } from "./auth";
import { watchUpdate } from "./app";

export default function* rootSaga() {
  yield all([
    watchSearchAsync(),
    watchAuthenticateAsync(),
    refreshTokenAsync(),
    watchLoadLocationsAsync(),
    watchLoadFlightOffersAsync(),
    watchUpdate()
  ]);
}
