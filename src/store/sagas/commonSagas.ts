import { put, call, takeEvery } from 'redux-saga/effects'
import { Ajax } from '@utils/ajax'

export function* requestMode(action) {
    yield call(Ajax.post, { url: '/api/switch/mode', body: { mode: action.payload.slice(1)}});
    yield put({type: 'common/switchModeSuccess', payload: action.payload.slice(1)})
  }

export function* watchMode() {
    yield takeEvery('SWITCH_MODE', requestMode);
}

export function* requestControlType(action) {
  yield call(Ajax.post, { url: '/api/switch/control-type', body: { mode: action.payload}});
  yield put({type: 'common/switchControlTypeSuccess', payload: action.payload})
}

export function* watchControlType() {
  yield takeEvery('SWITCH_CONTROL_TYPE', requestControlType);
}
 