import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICommonState {
  mode: string,
  isActive: boolean, 
}

const commonSlice = createSlice({
  name: 'common',
  initialState: { mode: '', isActive: false },
  reducers: {
    switchModeSuccess: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    startSuccess: (state) => {

      state.isActive = true;
      console.log('active',state.isActive)
    },
    stopSuccess: (state) => {
      state.isActive = false;
    },
  }
});

export const { switchModeSuccess, startSuccess, stopSuccess } = commonSlice.actions;
export default commonSlice.reducer;
