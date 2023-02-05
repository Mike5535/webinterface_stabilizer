import { put, call, takeEvery } from 'redux-saga/effects'
import { Ajax } from '@utils/ajax'

export function* postHysterWindow(action) {
  yield call(Ajax.post, { url: '/api/hyster/set-hyster-window', body: action.payload});
  yield put({type: 'hyster/setHysterWindowSuccess', payload: action.payload})
}

export function* watchPostHysterWindow() {
  yield takeEvery('SET_HYSTER_WINDOW', postHysterWindow);
}