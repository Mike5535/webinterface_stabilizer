import { IState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux'

export const MonitoringInfo = (props = null) => {
    const mode = useSelector((state: IState) => state.common.mode);
    const isActive = useSelector((state: IState) => state.common.isActive);
    const voltage = useSelector((state: IState) => state.common.voltage);

    const pwmFreq = useSelector((state: IState) => state.pwm.pwmFreq);
    const lawReg = useSelector((state: IState) => state.pwm.lawReg);
    const duty = useSelector((state: IState) => state.pwm.duty);

    const pfmFreq = useSelector((state: IState) => state.pfm.pfmFreq);
    const pulseDur = useSelector((state: IState) => state.pfm.pulseDur);

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
                        Текущий статус:
                    </div>
                    <div className="monitoring__row__field">
                        {isActive ? 'работает' : 'выключен'}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Частота:
                    </div>
                    <div className="monitoring__row__field">
                        {`${pwmFreq} кГц`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Коэф. заполнения:
                    </div>
                    <div className="monitoring__row__field">
                        {`${duty} %`}
                    </div>
                </div>

                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Закон регулирования:
                    </div>
                    <div className="monitoring__row__field">
                        {lawReg}
                    </div>
                </div>

                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        {`${voltage} В`}
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
                        Текущий статус:
                    </div>
                    <div className="monitoring__row__field">
                        {isActive ? 'работает' : 'выключен'}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Частота:
                    </div>
                    <div className="monitoring__row__field">
                    {`${pfmFreq} кГц`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Длительность имп.:
                    </div>
                    <div className="monitoring__row__field">
                    {`${pulseDur} мкс`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        {`${voltage} В`}
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
                        Текущий статус:
                    </div>
                    <div className="monitoring__row__field">
                        {isActive ? 'работает' : 'выключен'}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Окно гистерезиса:
                    </div>
                    <div className="monitoring__row__field">
                        0,01 В
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        {`${voltage} В`}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="monitoring__off-header">
            Выберите метод управления
        </div>
    );
}