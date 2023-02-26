import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IHysterState {
    hysterWindow: string,
}

export interface IHysterStateFromServer {
    hyster_window: string,
}

const pfmSlice = createSlice({
    name: 'hyster',
    initialState: { hysterWindow: '0.1' },
    reducers: {
        setHysterWindowSuccess: (state, action: PayloadAction<IHysterStateFromServer>) => {
            state.hysterWindow = action.payload.hyster_window;
        },
    }
});

export const { setHysterWindowSuccess } = pfmSlice.actions;
export default pfmSlice.reducer;
