import { wsUrl } from "@config/config"
import { eventChannel } from "redux-saga"
import { call, put, take } from "redux-saga/effects"


function initWebsocket() {
    return eventChannel(emitter => {
        const ws = new WebSocket(wsUrl)
        ws.onopen = () => {
            console.log('opening...')
            ws.send('hello server')
        }
        ws.onerror = (error) => {
            console.log('WebSocket error ' + error)
            console.dir(error)
        }
        ws.onmessage = (e) => {
            let msg = null
            try {
                msg = JSON.parse(e.data)
            } catch (e) {
                console.error(`Error parsing : ${e.data}`)
            }
            if (msg) {
                switch (msg.mode) {
                    case 'PWM':
                        return {
                            mode: emitter({ type: 'common/switchModeSuccess', payload: msg.mode }),
                            state: emitter({
                                type: 'pwm/setPwmStateAuto', payload: {
                                    duty: msg.duty,
                                    pwm_freq: msg.pwm_freq,
                                    law_reg: msg.law_reg,
                                }
                            })
                        }
                    case 'PFM':
                        return {
                            mode: emitter({ type: 'common/switchModeSuccess', payload: msg.mode }),
                            state: emitter({
                                type: 'pwm/setPfmStateAuto', payload: {
                                    pulse_duration: msg.pulse_duration,
                                    pfmFreq: msg.pfmFreq,
                                }
                            })
                        }
                    case 'hysteresis':
                        return {
                            mode: emitter({ type: 'common/switchModeSuccess', payload: msg.mode }),
                            state: emitter({
                                type: 'pwm/setHysterWindowSuccess', payload: {
                                    hyster_window: msg.hyster_window,
                                }
                            })
                        }
                    default:
                    // nothing to do
                }
            }
        }
        // unsubscribe function
        return () => {
            console.log('Socket off')
        }
    })
}

export default function* watchWS() {
    const channel = yield call(initWebsocket)
    while (true) {
        const actionObject = yield take(channel)
        yield put(actionObject.mode)
        yield put(actionObject.state)
    }
}
