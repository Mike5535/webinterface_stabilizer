import { createReducer } from '@reduxjs/toolkit'
import {
    actionSwitchModeSuccess,
    actionSwitchControlTypeSuccess
} from '@actions/commonActions'

export interface InitState {
    mode: string,
    controlType: string,
}

const initialState = { mode: '', controlType: '' } as InitState

export const commonReducer = createReducer(initialState, {
  [actionSwitchModeSuccess.type]: (state, action) => {
    state.mode = action.payload;
  },
  [actionSwitchControlTypeSuccess.type]: (state, action) => {
    if(state.controlType === action.payload) {
      state.controlType = '';
    } else {
      state.controlType = action.payload;
    }
  },
});
  