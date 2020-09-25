import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { getFlightDestinationsAsync, getFlightOffersAsync } from "../../services/flight";
import { getAirlinesLogoAsync, getLocationsAsync } from "../../services/shared";

export function* searchAsync(action) {
  let results = [];
  const { origin, token } = action.data;
  if (origin) {
    results = yield call(getFlightDestinationsAsync, origin.code, token);
  }
  yield put({ type: "APP_SEARCH_COMPLETED", data: { results } });
}

export function* watchSearchAsync() {
  yield takeEvery("APP_SEARCH", searchAsync);
}

export function* loadLocationsAsync(action) {
  const { keyword } = action.data;
  const results = yield call(getLocationsAsync, keyword);
  yield put({ type: "APP_LOAD_LOCATION_COMPLETED", data: { results } });
}

export function* watchLoadLocationsAsync() {
  yield takeEvery("APP_LOAD_LOCATIONS", loadLocationsAsync);
}

export function* loadFlightOffersAsync(action) {
  const { url, token } = action.data;
  const results = yield call(getFlightOffersAsync, url, token);
  yield put({ type: "APP_LOAD_FLIGHT_OFFERS_COMPLETED", data: { results } });
}

export function* watchLoadFlightOffersAsync() {
  yield takeLatest("APP_LOAD_FLIGHT_OFFERS", loadFlightOffersAsync);
}

export function* loadAirlineLogoAsync(action) {
  const {iataCode} = action.data;
  const result = yield call(getAirlinesLogoAsync, iataCode);
  yield put({ type: "APP_LOAD_AIRLINE_LOGO_COMPLETED", data: { result } });
}

export function* watchLoadAirlineLogoAsync() {
  yield takeLatest("APP_LOAD_AIRLINE_LOGO", loadAirlineLogoAsync);
}
