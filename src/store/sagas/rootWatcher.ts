import { call, all } from "redux-saga/effects";
import {
    watchMode,
    watchControlType,
} from '@sagas/commonSagas'
import { watchPostPwmFreq } from "@sagas/pwmSagas";

export function* rootWatcher() {
    yield all([
        call(watchMode),
        call(watchControlType),
        call(watchPostPwmFreq),
    ]);
}