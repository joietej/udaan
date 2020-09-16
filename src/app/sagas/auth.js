import { fork, put, call, takeLatest, delay } from "redux-saga/effects";
import { authenticate, storeToken } from "../../services/auth";

export function* authenticateAsync() {
  const token = yield call(authenticate);
  yield call(storeToken, token.access_token);
  yield put({ type: "AUTH_COMPLETED", data: { token } });
}

export function* watchAuthenticateAsync() {
  yield takeLatest("AUTH_GET", authenticateAsync);
}

export function* refreshTokenAsync() {
  while (true) {
      const token = yield fork(authenticate);
      yield fork(storeToken, token.access_token);
      yield delay(1000 * 60);
    }
}
