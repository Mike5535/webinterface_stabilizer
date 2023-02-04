import { createAction } from '@reduxjs/toolkit'

export const actionSetPulseDur = createAction<{pulse_duration: string}>('SET_PULSE_DURATION');
