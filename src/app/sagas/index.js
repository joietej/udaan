import { all } from "redux-saga/effects";
import {watchSearchAsync, watchLoadAirports} from './search'
import { watchAuthenticateAsync, refreshTokenAsync } from "./auth";


export default function* rootSaga(){
    yield all([watchSearchAsync(), watchAuthenticateAsync(), refreshTokenAsync(), watchLoadAirports()]);
}