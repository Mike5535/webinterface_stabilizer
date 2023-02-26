import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPfmState {
    pulseDur: string,
    pfmFreq: string,
}

export interface IPfmStateFromServer {
    pulse_duration: string,
    pfm_freq: string,
}

const pfmSlice = createSlice({
    name: 'pfm',
    initialState: { pulseDur: '2', pfmFreq: '0' },
    reducers: {
        setPulseDurSuccess: (state, action: PayloadAction<{ pulse_duration: string }>) => {
            state.pulseDur = (Number(action.payload.pulse_duration) * 1e6).toString();
        },
        setPfmStateAuto: (state, action: PayloadAction<IPfmStateFromServer>) => {
            state.pulseDur = (Number(action.payload.pulse_duration) * 1e6).toString();
            state.pfmFreq = (Number(action.payload.pfm_freq)/1000).toString();
        },
    }
});

export const { setPulseDurSuccess, setPfmStateAuto } = pfmSlice.actions;
export default pfmSlice.reducer;
