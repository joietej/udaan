import { createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

import rootReducer from "./reducers";

import createReduxSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key : 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createReduxSagaMiddleware();

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
