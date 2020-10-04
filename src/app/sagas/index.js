import { all } from "redux-saga/effects";
import { watchSearchAsync, watchLoadLocationsAsync, watchLoadFlightOffersAsync } from "./search";
import { watchUpdate } from "./app";

export default function* rootSaga() {
  yield all([
    watchSearchAsync(),
    watchLoadLocationsAsync(),
    watchLoadFlightOffersAsync(),
    watchUpdate()
  ]);
}
