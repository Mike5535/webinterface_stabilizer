import { createReducer } from '@reduxjs/toolkit'
import {
    actionSwitchModeSuccess
} from '@actions/commonActions'

interface InitState {
    mode: string,
    controlType: string,
}

const initialState = { mode: 'PWM', controlType: 'none' } as InitState

export const commonReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(actionSwitchModeSuccess, (state, action) => {
        console.log('reducer', state.mode);
        state.mode = action.payload;
      })
  })