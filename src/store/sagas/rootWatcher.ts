import { call, all } from "redux-saga/effects";
import {
    watchMode,
    watchControlType,
} from '@sagas/commonSagas'
import { watchPostLawReg, watchPostPwmFreq } from "@sagas/pwmSagas";
import watchWS from "@sagas/wsSaga";

export function* rootWatcher() {
    yield all([
        call(watchMode),
        call(watchControlType),
        call(watchPostPwmFreq),
        call(watchPostLawReg),
        call(watchWS),
    ]);
}