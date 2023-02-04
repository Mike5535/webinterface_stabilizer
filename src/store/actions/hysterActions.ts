import { createAction } from '@reduxjs/toolkit'

export const actionSetHysterWindow = createAction<{hyster_window: string}>('SET_HYSTER_WINDOW');
