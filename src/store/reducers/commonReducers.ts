import { createReducer } from '@reduxjs/toolkit'
import {
    actionSwitchMode
} from '@actions/commonActions'

interface InitState {
    mode: string,
    controlType: string,
}

const initialState = { mode: 'PWM', controlType: 'none' } as InitState

export const commonReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(actionSwitchMode, (state, action) => {
        console.log('reducer', state.mode)
        state.mode = action.payload;
      })
  })