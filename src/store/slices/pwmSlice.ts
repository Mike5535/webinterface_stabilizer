import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPwmState {
  pwmFreq: string,
  lawReg: string,
}

const pwmSlice = createSlice({
  name: 'pwm',
  initialState: { pwmFreq: '', lawReg: '' },
  reducers: {
    setPwmFreqSuccess: (state, action: PayloadAction<{ pwm_freq: string }>) => {
      state.pwmFreq = action.payload.pwm_freq;
    },
    setLawRegSuccess: (state, action: PayloadAction<{ law_reg: string }>) => {
      console.log('law_reg',action.payload.law_reg)
      state.lawReg = action.payload.law_reg;
      console.log('state',state)
    },
  }
});

export const { setPwmFreqSuccess, setLawRegSuccess } = pwmSlice.actions;
export default pwmSlice.reducer;
