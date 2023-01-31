import { put, call, takeEvery } from 'redux-saga/effects'
import { Ajax } from '@utils/ajax'

export function* postPwmFreq(action) {
  yield call(Ajax.post, { url: '/api/pwm/set-frequency', body: action.payload});
  yield put({type: 'pwm/setPwmFreqSuccess', payload: action.payload})
}

export function* watchPostPwmFreq() {
  yield takeEvery('SET_PWM_FREQ', postPwmFreq);
}
