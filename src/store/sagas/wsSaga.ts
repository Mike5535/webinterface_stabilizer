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
                        return emitter({
                            mode: { type: 'common/switchModeSuccess', payload: msg.mode },
                            state: {
                                type: 'pwm/setPwmStateAuto', payload: {
                                    duty: msg.duty,
                                    pwm_freq: msg.pwm_freq,
                                    law_reg: msg.law_reg,
                                }
                            },
                            voltage: { type: 'common/setVoltage', payload: { voltage: msg.voltage } },
                        });
                    case 'PFM':
                        return emitter({
                            mode: { type: 'common/switchModeSuccess', payload: msg.mode },
                            state: {
                                type: 'pwm/setPfmStateAuto', payload: {
                                    pulse_duration: msg.pulse_duration,
                                    pfm_freq: msg.pfm_freq,
                                }
                            },
                            voltage: { type: 'common/setVoltage', payload: { voltage: msg.voltage } },
                        });
                    case 'hysteresis':
                        return emitter({
                            mode: { type: 'common/switchModeSuccess', payload: msg.mode },
                            state: {
                                type: 'pwm/setHysterWindowSuccess', payload: {
                                    hyster_window: msg.hyster_window,
                                }
                            },
                            voltage: { type: 'common/setVoltage', payload: { voltage: msg.voltage } },
                        });
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
        yield put(actionObject.voltage)
    }
}
