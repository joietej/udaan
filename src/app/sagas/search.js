import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { getFlightDestinations } from "../../services/flight";
import { getAirports } from "../../services/airport";

export function* searchAsync(action) {
  let results = [];
  const { origin, token } = action.data;
  if (origin) {
    results = yield call(getFlightDestinations, origin, token);
  }
  yield put({ type: "APP_SEARCH_COMPLETED", data: { results } });
}

export function* watchSearchAsync() {
  yield takeEvery("APP_SEARCH", searchAsync);
}

export function* loadAirports() {
  const results = yield call(getAirports);
  yield put({ type: "APP_LOAD_AIRPORT_COMPLETED", data: { results } });
}

export function* watchLoadAirports() {
  yield takeLatest("APP_LOAD_AIRPORTS", loadAirports);
}
