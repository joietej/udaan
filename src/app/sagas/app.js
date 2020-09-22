import { call, put, takeLatest } from "redux-saga/effects";

export function* update(action) {
  const { waitingWorker } = action.data;
  yield call(waitingWorker.postMessage({ data: { type: "SKIP_WAITING" } }));
  yield put({ type: "APP_UPDATE_COMPLETED" });
}

export function* watchUpdate() {
  yield takeLatest("APP_UPDATE", update);
}
