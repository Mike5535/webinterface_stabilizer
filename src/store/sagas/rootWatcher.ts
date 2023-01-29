import { call, all } from "redux-saga/effects";
import {
    watchMode
} from '@sagas/commonSagas'

export function* rootWatcher() {
    yield all([
        call(watchMode)
    ]);
}