import React from 'react';
import { Monitoring } from '@components/Monitoring/monitoring'
import { Outlet } from 'react-router-dom'

export const MainPage = (props = null) => {
    return <div className="main-page">
        <Monitoring />
        <Outlet />
    </div>;
}