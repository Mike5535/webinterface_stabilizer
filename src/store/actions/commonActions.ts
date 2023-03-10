import { createAction } from '@reduxjs/toolkit'

export const actionSwitchMode = createAction<string>('SWITCH_MODE');
export const actionStart = createAction('START');
export const actionStop = createAction('STOP');
export const actionSetVoltage = createAction<{voltage: string}>('SET_VOLTAGE');
