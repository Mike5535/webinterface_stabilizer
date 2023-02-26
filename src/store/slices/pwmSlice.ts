import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPwmState {
  pwmFreq: string,
  lawReg: string,
  duty: string,
}

export interface IPwmStateFromServer {
  pwm_freq: string,
  law_reg: string,
  duty: string,
}

const pwmSlice = createSlice({
  name: 'pwm',
  initialState: { pwmFreq: '100', lawReg: 'П', duty: '0' },
  reducers: {
    setPwmFreqSuccess: (state, action: PayloadAction<{ pwm_freq: string }>) => {
      state.pwmFreq = (Number(action.payload.pwm_freq)/1000).toString();
    },
    setLawRegSuccess: (state, action: PayloadAction<{ law_reg: string }>) => {
      state.lawReg = action.payload.law_reg;
    },
    setPwmStateAuto: (state, action: PayloadAction<IPwmStateFromServer>) => {
      state.pwmFreq = (Number(action.payload.pwm_freq)/1000).toString();
      state.lawReg = action.payload.law_reg;
      state.duty = action.payload.duty;
    },
  }
});

export const { setPwmFreqSuccess, setLawRegSuccess } = pwmSlice.actions;
export default pwmSlice.reducer;
