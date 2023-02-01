import { IState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux'

export const MonitoringInfo = (props = null) => {
    const mode = useSelector((state: IState) => state.common.mode)
    const controlType = useSelector((state: IState) => state.common.controlType)

    if (mode && !controlType) {
        return (
            <div className="monitoring__off-header">
                Выберите режим управления
            </div>
        );
    }

    if (!mode && controlType) {
        return (
            <div className="monitoring__off-header">
                Выберите метод управления
            </div>
        );
    }

    if (mode === 'PWM') {
        return (
            <>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Метод управления:
                    </div>
                    <div className="monitoring__row__field">
                        ШИМ
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Частота:
                    </div>
                    <div className="monitoring__row__field">
                        100 кГц
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Коэф. заполнения:
                    </div>
                    <div className="monitoring__row__field">
                        0 %
                    </div>
                </div>
                {controlType === 'auto' ?
                    <div className="monitoring__row">
                        <div className="monitoring__row__header">
                            Закон регулирования:
                        </div>
                        <div className="monitoring__row__field">
                            П
                        </div>
                    </div> : ''
                }
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        5 В
                    </div>
                </div>
            </>
        );
    }

    if (mode === 'PFM') {
        return (
            <>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Метод управления:
                    </div>
                    <div className="monitoring__row__field">
                        ЧИМ
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Частота:
                    </div>
                    <div className="monitoring__row__field">
                        100 кГц
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Длительность имп.:
                    </div>
                    <div className="monitoring__row__field">
                        5 мкс
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        5 В
                    </div>
                </div>
            </>
        );
    }

    if (mode === 'hysteresis') {
        return (
            <>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Метод управления:
                    </div>
                    <div className="monitoring__row__field">
                        Гистерезис
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Верхний порог:
                    </div>
                    <div className="monitoring__row__field">
                        5,01 В
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Нижний порог:
                    </div>
                    <div className="monitoring__row__field">
                        4,99 В
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        5 В
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="monitoring__off-header">
            Выберите режим и метод управления
        </div>
    );
}