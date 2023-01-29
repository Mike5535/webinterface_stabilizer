import { put, call, takeEvery } from 'redux-saga/effects'
import { Ajax } from '@utils/ajax'

export function* requestMode(action) {
    yield call(Ajax.post, { url: '/api/switch/mode', body: { mode: action.payload.slice(1)}});
    yield put({type: 'SWITCH_MODE_SUCCESS', payload: action.payload})
  }

export function* watchMode() {
    yield takeEvery('SWITCH_MODE', requestMode);
}