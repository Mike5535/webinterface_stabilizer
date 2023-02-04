import { put, call, takeEvery } from 'redux-saga/effects'
import { Ajax } from '@utils/ajax'

export function* postPulseDur(action) {
  yield call(Ajax.post, { url: '/api/pfm/set-pulse-duration', body: action.payload});
  yield put({type: 'pfm/setPulseDur', payload: action.payload})
}

export function* watchpostPulseDur() {
  yield takeEvery('SET_PULSE_DURATION', postPulseDur);
}