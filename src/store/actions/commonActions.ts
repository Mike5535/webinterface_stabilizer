import { createAction } from '@reduxjs/toolkit'

export const actionSwitchMode = createAction<string>('SWITCH_MODE');
export const actionSwitchModeSuccess = createAction<string>('SWITCH_MODE_SUCCESS');  
