import { createAction } from '@reduxjs/toolkit'

export const actionSetPulseDur = createAction<{pfm_freq: string}>('SET_PULSE_DURATION');
