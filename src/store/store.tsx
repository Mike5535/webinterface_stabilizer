import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { commonReducer } from '@reducers/commonReducers'
import { rootWatcher } from '@/store/sagas/rootWatcher'

export const setupStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
      reducer: commonReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    });
    sagaMiddleware.run(rootWatcher);
  
    return store;
  };
