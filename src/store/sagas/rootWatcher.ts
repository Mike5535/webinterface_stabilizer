import { call, all } from "redux-saga/effects";
import {
    watchMode,
    watchStart,
    watchStop,
    watchSetVoltage,
} from '@sagas/commonSagas'
import { watchPostLawReg, watchPostPwmFreq } from "@sagas/pwmSagas";
import watchWS from "@sagas/wsSaga";
import { watchpostPulseDur } from "@sagas/pfmSagas";
import { watchPostHysterWindow } from "@sagas/hysterSgagas";

export function* rootWatcher() {
    yield all([
        call(watchMode),
        call(watchStart),
        call(watchStop),
        call(watchSetVoltage),
        call(watchPostPwmFreq),
        call(watchPostLawReg),
        call(watchpostPulseDur),
        call(watchPostHysterWindow),
        call(watchWS),
    ]);
}