import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import commonReducer from '@/store/slices/commonSlice'
import pwmReducer from '@/store/slices/pwmSlice'
import { ICommonState } from '@/store/slices/commonSlice'
import { rootWatcher } from '@/store/sagas/rootWatcher'
import { IPwmState } from '@/store/slices/pwmSlice';

export interface IState {
  common: ICommonState,
  pwm: IPwmState,
}

export const setupStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
      reducer: {
        common: commonReducer,
        pwm: pwmReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    });
    sagaMiddleware.run(rootWatcher);
  
    return store;
  };
