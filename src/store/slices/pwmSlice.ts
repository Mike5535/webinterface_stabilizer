import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPwmState {
  pwmFreq: string,
}

const pwmSlice = createSlice({
  name: 'pwm',
  initialState: { pwmFreq: '' },
  reducers: {
    setPwmFreqSuccess: (state, action: PayloadAction<{pwm_freq: string}>) => {
     state.pwmFreq = action.payload.pwm_freq;
   },
  }
});

export const { setPwmFreqSuccess } = pwmSlice.actions;
export default pwmSlice.reducer;
