import { createAction } from '@reduxjs/toolkit'

export const actionSwitchMode = createAction<string>('SWITCH_MODE');
export const actionSwitchModeSuccess = createAction<string>('SWITCH_MODE_SUCCESS');  
export const actionSwitchControlType = createAction<string>('SWITCH_CONTROL_TYPE');
export const actionSwitchControlTypeSuccess = createAction<string>('SWITCH_CONTROL_TYPE_SUCCESS');  
