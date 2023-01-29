import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* requestMode(payload) {
    yield console.log(payload)
    yield delay(1000)
  }

export function* watchMode() {
    yield takeEvery('SWITCH_MODE', requestMode)
}