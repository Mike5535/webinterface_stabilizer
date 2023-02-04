import { IState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux'
import { MonitoringInfo } from '../MonitoringInfo/monitoringInfo';
import { StartButton } from '../StartButton/startButton';

export const Monitoring = (props = null) => {
    const isActive = useSelector((state: IState) => state.common.isActive);

    return (
        <div className="monitoring__background">
            <div className="monitoring__header__wrapper">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M25.4435 2.62251H25.4419C23.1054 2.62251 20.8627 3.02402 18.7781 3.76037L20.2633 10.9554C21.5108 10.6091 22.8219 10.4277 24.174 10.4277L24.2279 10.4286C24.9371 10.4277 25.6349 10.4808 26.3183 10.5815L28.9134 2.92077C27.7893 2.7235 26.6327 2.6225 25.4525 2.6225L25.4435 2.62251ZM17.3835 4.31337H17.3833C14.7834 5.45844 12.4731 7.14037 10.5925 9.2188L14.2307 14.2989C15.5761 13.0742 17.1358 12.0949 18.8437 11.4272L17.3835 4.31337ZM27.7807 10.8747H27.781C29.7199 11.3655 31.5115 12.2453 33.0734 13.4292L33.0737 13.4294C33.5064 13.7576 33.9219 14.1091 34.3175 14.4821L41.7768 11.0463C41.4861 10.6333 41.1778 10.2332 40.8552 9.84543L40.8547 9.84515C38.1875 6.6398 34.5394 4.28237 30.3718 3.23022L27.7807 10.8747ZM9.61354 10.3895L9.61326 10.3898C8.12133 12.3116 6.97205 14.5148 6.25726 16.9054L10.5229 19.4294C11.1937 17.928 12.0913 16.5572 13.17 15.363L9.61354 10.3895ZM25.4235 21.3617H25.4238C26.1127 21.3617 26.671 21.92 26.671 22.6089C26.671 23.298 26.1124 23.8574 25.4232 23.8574H25.4227C24.7335 23.8569 24.1749 23.2983 24.1749 22.6091C24.1749 21.9199 24.7335 21.3616 25.4227 21.3616L25.4235 21.3617ZM5.87425 18.3988L5.87397 18.3996C5.57682 19.7671 5.42029 21.1921 5.42029 22.6533C5.42029 23.1678 5.43982 23.6778 5.47777 24.1826L9.19627 24.7403C9.29281 23.3785 9.56039 22.0662 9.97727 20.8262L5.87425 18.3988ZM43.8207 11.1495H43.8196C43.6923 11.1495 43.5763 11.1925 43.4488 11.2511L26.6352 18.9954C26.2543 18.8678 25.847 18.7987 25.4231 18.7987H25.4195C23.3166 18.7981 21.6134 20.5059 21.6134 22.6087C21.6134 24.7127 23.3188 26.4178 25.4226 26.4192H25.4234C27.2738 26.4181 28.8146 25.0992 29.1595 23.3503C29.1595 23.35 29.16 23.3497 29.16 23.3497C29.2953 23.2524 44.19 12.5347 44.19 12.5347C44.4972 12.3135 44.6618 11.9318 44.4995 11.5794C44.4118 11.3891 44.2534 11.2538 44.0698 11.1902L44.0675 11.1896C43.9891 11.1617 43.906 11.1497 43.8231 11.1497L43.8207 11.1495ZM5.65068 25.7074V25.7079C5.88477 27.2344 6.29215 28.7096 6.85268 30.1069L9.55804 29.4613C9.31976 28.4186 9.18304 27.3407 9.15933 26.2333L5.65068 25.7074ZM7.46432 31.4799L7.4646 31.4805C8.00478 32.5787 8.64289 33.6209 9.36753 34.5951L10.9345 33.1956C10.5512 32.4548 10.2239 31.6844 9.95825 30.8842L7.46432 31.4799ZM10.2938 35.7506V35.7511C10.7001 36.2199 11.1253 36.6705 11.5728 37.1005L11.5731 37.1011C11.7249 37.266 11.9428 37.3703 12.185 37.3703H12.1853C12.6437 37.3698 13.0153 36.9981 13.0153 36.5397V36.5391C13.0153 36.3371 12.9431 36.1521 12.8234 36.0084L12.8164 36.0003C12.4155 35.5196 12.0413 35.0196 11.6987 34.4948L10.2938 35.7506Z" fill="black" />
                </svg>
                <div className="monitoring__header">Мониторинг</div>
            </div>
            < MonitoringInfo />
            <div className='monitoring__buttons'>
                < StartButton tittle='Стоп' />
                < StartButton tittle='Старт' isActive={ isActive? 'pressed' : 'no pressed' } />
            </div>
        </div>
    );
}