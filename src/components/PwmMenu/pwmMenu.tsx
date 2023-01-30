import React from 'react';

export const PwmMenu = () => {
    return (
        <div className='pwm__menu'>
            <div className='pwm__menu__header'>Закон регулирования</div>
            <div className='pwm__menu__content'>
                <div className='pwm__menu__row'>П - Пропорциональный</div>
                <div className='pwm__menu__row'>ПИ - Пропорционально интегрирующий</div>
                <div className='pwm__menu__row'>ПИД - Пропорционально интегрирующий дифференцирующий</div>
            </div>
        </div>
    );
}
