import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import commonReducer from '@store/slices/commonSlice'
import pwmReducer from '@store/slices/pwmSlice'
import pfmReducer from '@store/slices/pfmSlice'
import hysterReducer from '@store/slices/hysterSlice'
import { ICommonState } from '@store/slices/commonSlice'
import { rootWatcher } from '@store/sagas/rootWatcher'
import { IPwmState } from '@store/slices/pwmSlice';
import { IPfmState } from '@slices/pfmSlice'
import { IHysterState } from '@slices/hysterSlice'

export interface IState {
  common: ICommonState,
  pwm: IPwmState,
  pfm: IPfmState,
  hyster: IHysterState,
}

export const setupStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
      reducer: {
        common: commonReducer,
        pwm: pwmReducer,
        pfm: pfmReducer,
        hyster: hysterReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    });
    sagaMiddleware.run(rootWatcher);
  
    return store;
  };
