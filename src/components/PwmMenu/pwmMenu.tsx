import { actionSetLawReg } from '@/store/actions/pwmActions';
import { IState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const PwmMenu = () => {
    const dispatch = useDispatch();
    const lawReg = useSelector((state: IState) => state.pwm.lawReg)

    const handlerLawReg = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetClass = e.currentTarget.className;
        let lawReg = '';
        switch (targetClass) {
            case 'pwm__menu__row-one':
                lawReg = 'П';
                break;
            case 'pwm__menu__row':
                lawReg = 'ПИ';
                break;
            case 'pwm__menu__row-last':
                lawReg = 'ПИД';
                break;
        }
        dispatch(actionSetLawReg({ law_reg: lawReg}));
    }

    return (
        <div className='pwm__menu'>
            <div className='pwm__menu__header'>
                {lawReg? `${lawReg} регулирование`: 'Закон регулирования'} 
                <svg className='pwm__menu__up' width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9568 3.62396e-05C10.6686 -0.00161171 10.383 0.0530062 10.1162 0.160756C9.84945 0.268506 9.60681 0.427267 9.40221 0.627939L0.643934 9.28868C0.439782 9.49056 0.27784 9.73022 0.167354 9.99399C0.0568673 10.2578 4.30219e-09 10.5405 0 10.826C-4.30219e-09 11.1115 0.0568673 11.3942 0.167354 11.6579C0.27784 11.9217 0.439782 12.1614 0.643934 12.3632C0.848087 12.5651 1.09045 12.7253 1.35719 12.8345C1.62393 12.9438 1.90981 13 2.19853 13C2.48724 13 2.77313 12.9438 3.03987 12.8345C3.30661 12.7253 3.54897 12.5651 3.75312 12.3632L10.9568 5.19648L18.1824 12.0818C18.3838 12.3032 18.6293 12.4812 18.9034 12.6046C19.1776 12.728 19.4746 12.7941 19.7757 12.7988C20.0769 12.8036 20.3759 12.7468 20.6538 12.632C20.9318 12.5173 21.1829 12.3471 21.3913 12.132C21.5997 11.917 21.761 11.6617 21.8651 11.3822C21.9692 11.1027 22.0138 10.8049 21.9963 10.5076C21.9787 10.2102 21.8993 9.91965 21.7629 9.65404C21.6266 9.38842 21.4363 9.15348 21.204 8.9639L12.4457 0.606287C12.0453 0.224532 11.513 0.00777817 10.9568 3.62396e-05Z" fill="#656565" />
                </svg>
                <svg className='pwm__menu__down' width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9568 13C10.6686 13.0016 10.383 12.947 10.1162 12.8392C9.84945 12.7315 9.60681 12.5727 9.40221 12.3721L0.643934 3.71132C0.439782 3.50944 0.27784 3.26978 0.167354 3.00601C0.0568673 2.74225 4.30219e-09 2.45954 0 2.17404C-4.30219e-09 1.88854 0.0568673 1.60584 0.167354 1.34207C0.27784 1.0783 0.439782 0.83864 0.643934 0.636762C0.848087 0.434883 1.09045 0.274744 1.35719 0.165488C1.62393 0.0562319 1.90981 -4.25427e-09 2.19853 0C2.48724 4.25428e-09 2.77313 0.0562319 3.03987 0.165488C3.30661 0.274744 3.54897 0.434883 3.75312 0.636762L10.9568 7.80352L18.1824 0.918236C18.3838 0.69676 18.6293 0.518763 18.9034 0.395377C19.1776 0.271992 19.4746 0.205873 19.7757 0.201154C20.0769 0.196436 20.3759 0.253218 20.6538 0.367953C20.9318 0.482689 21.1829 0.652909 21.3913 0.867964C21.5997 1.08302 21.761 1.33829 21.8651 1.6178C21.9692 1.89731 22.0138 2.19506 21.9963 2.49242C21.9787 2.78977 21.8993 3.08035 21.7629 3.34596C21.6266 3.61158 21.4363 3.84652 21.204 4.0361L12.4457 12.3937C12.0453 12.7755 11.513 12.9922 10.9568 13Z" fill="#656565" />
                </svg>
            </div>
            <div className='pwm__menu__content'>
                <div className='pwm__menu__row-one' onClick={handlerLawReg}>П - Пропорциональное</div>
                <div className='pwm__menu__row' onClick={handlerLawReg}>ПИ - Пропорционально интегрирующее</div>
                <div className='pwm__menu__row-last' onClick={handlerLawReg}>ПИД - Пропорционально интегрирующее дифференцирующее</div>
            </div>
        </div>
    );
}
