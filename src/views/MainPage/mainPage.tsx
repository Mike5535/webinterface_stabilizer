import React from 'react';
import { Monitoring } from '@components/Monitoring/monitoring'
import { Outlet } from 'react-router-dom'

export const MainPage = (props = null) => {
    return <div className='main-page'>
        <Monitoring />
        <div className='main-page__body'>
            <Outlet />
            <div className='main-page__author'>
                Разработчики: Волков М.Д., Шаповалов  И.О., Бакулин А.А.
            </div>
        </div>
    </div>;
}