import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICommonState {
  mode: string,
  isActive: boolean,
  voltage: string, 
}

const commonSlice = createSlice({
  name: 'common',
  initialState: { mode: '', isActive: false, voltage: '5' },
  reducers: {
    switchModeSuccess: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    switchWorkStatusSuccess: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    startSuccess: (state) => {
      state.isActive = true;
    },
    stopSuccess: (state) => {
      state.isActive = false;
    },
    setVoltage: (state, action: PayloadAction<{ voltage: string }>) => {
      state.voltage = action.payload.voltage;
    },
  }
});

export const { switchModeSuccess, startSuccess, stopSuccess } = commonSlice.actions;
export default commonSlice.reducer;
