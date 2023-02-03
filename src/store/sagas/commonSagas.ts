import { put, call, takeEvery } from 'redux-saga/effects'
import { Ajax } from '@utils/ajax'

export function* requestMode(action) {
    yield call(Ajax.post, { url: '/api/switch/mode', body: { mode: action.payload.slice(1)}});
    yield put({type: 'common/switchModeSuccess', payload: action.payload.slice(1)})
  }

export function* watchMode() {
    yield takeEvery('SWITCH_MODE', requestMode);
}

export function* requestStart() {
  yield call(Ajax.post, { url: '/api/switch/start', body: {}});
  yield put({type: 'common/startSuccess'})
}

export function* watchStart() {
  yield takeEvery('START', requestStart);
}

export function* requestStop() {
  yield call(Ajax.post, { url: '/api/switch/stop', body: {}});
  yield put({type: 'common/stopSuccess'})
}

export function* watchStop() {
  yield takeEvery('STOP', requestStop);
}

export function* requestSetVoltage(action) {
  yield call(Ajax.post, { url: '/api/set-voltage', body: action.payload });
  yield put({type: 'common/setVoltage', payload: action.payload})
}

export function* watchSetVoltage() {
  yield takeEvery('SET_VOLTAGE', requestSetVoltage);
}
 