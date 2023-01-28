import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import '@/index.scss';
import { ErrorPage } from "@components/ErrorPage/errorPage";
import { MainPage } from '@views/MainPage/mainPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< MainPage />} errorElement={<ErrorPage/>}>
      {/* <Route path="/pwm" element={< PwmSettings />} />
        <Route path="/pfm" element={< PfmSettings />} />
        <Route path="/hysteresis" element={< HysteresisSettings />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
