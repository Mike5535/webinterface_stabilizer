import { createAction } from '@reduxjs/toolkit'

export const actionSwitchMode = createAction<string>('SWITCH_MODE');
export const actionSwitchControlType = createAction<string>('SWITCH_CONTROL_TYPE');
