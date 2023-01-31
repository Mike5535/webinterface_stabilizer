import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICommonState {
  mode: string,
  controlType: string,
}

const commonSlice = createSlice({
  name: 'common',
  initialState: { mode: '', controlType: '' },
  reducers: {
    switchModeSuccess: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    switchControlTypeSuccess: (state, action: PayloadAction<string>) => {
      if (state.controlType === action.payload) {
        state.controlType = '';
      } else {
        state.controlType = action.payload;
      }
    }
  }
});

export const { switchModeSuccess, switchControlTypeSuccess } = commonSlice.actions;
export default commonSlice.reducer;
