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
            state.pulseDur = action.payload.pulse_duration;
        },
        setPfmStateAuto: (state, action: PayloadAction<IPfmStateFromServer>) => {
            state.pulseDur = action.payload.pulse_duration;
            state.pfmFreq = action.payload.pfm_freq;
        },
    }
});

export const { setPulseDurSuccess, setPfmStateAuto } = pfmSlice.actions;
export default pfmSlice.reducer;
