import { put, takeLatest } from "redux-saga/effects";

export function* update(action) {
  const { waitingWorker } = action.data;
  yield waitingWorker.postMessage({ type: "SKIP_WAITING" });
  yield put({
    type: "APP_UPDATE_COMPLETED",
    data: {
      message: "🎉 App Updated",
    },
  });
}

export function* watchUpdate() {
  yield takeLatest("APP_UPDATE", update);
}
