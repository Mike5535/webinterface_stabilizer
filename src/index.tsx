import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import '@/index.scss';
import { Provider } from 'react-redux';
import { setupStore } from '@store/store'
import { ErrorPage } from '@components/ErrorPage/errorPage';
import { MainPage } from '@views/MainPage/mainPage'
import { MainBody } from '@components/MainBody/mainBody'

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< MainPage />} errorElement={<ErrorPage />}>
      <Route path="/" element={< MainBody />} />
      <Route path="/PWM" element={< MainBody />} />
        {/* <Route path="/PFM" element={< PfmSettings />} />
        <Route path="/hysteresis" element={< HysteresisSettings />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
