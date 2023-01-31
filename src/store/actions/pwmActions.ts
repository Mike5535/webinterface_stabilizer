import { createAction } from '@reduxjs/toolkit'

export const actionSetPwmFreq = createAction<{pwm_freq: string}>('SET_PWM_FREQ');
export const actionSetLawReg = createAction<{law_reg: string}>('SET_LAW_REG');
