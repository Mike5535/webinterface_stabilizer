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
                const { payload: currentState } = msg
                const channel = msg.channel
                switch (channel) {
                    case 'GET_STATE_PWM_AUTO':
                        return {
                            mode: emitter({ type: 'common/switchModeSuccess', payload: currentState.mode }),
                            state: emitter({ type: 'pwm/setPwmStateAuto', payload: currentState.state })
                        }
                    case 'GET_STATE_PWM_MANUAL':
                        return emitter({ type: 'pwm/setPwmStateManual', currentState })
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
