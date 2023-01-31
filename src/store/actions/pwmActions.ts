import { createAction } from '@reduxjs/toolkit'

export const actionSetPwmFreq = createAction<{pwm_freq: string}>('SET_PWM_FREQ');
