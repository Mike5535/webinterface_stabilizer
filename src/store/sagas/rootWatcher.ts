import { call, all } from "redux-saga/effects";
import {
    watchMode,
    watchControlType,
} from '@sagas/commonSagas'

export function* rootWatcher() {
    yield all([
        call(watchMode),
        call(watchControlType)
    ]);
}