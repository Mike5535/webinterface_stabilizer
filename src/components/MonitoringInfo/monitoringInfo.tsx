import { IState } from '@/store/store';
import { changeDot } from '@/utils/valid';
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

    const hysterWindow = useSelector((state: IState) => state.hyster.hysterWindow);

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
                        {`${changeDot(pwmFreq)} кГц`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Коэф. заполнения:
                    </div>
                    <div className="monitoring__row__field">
                        {`${changeDot(duty)} %`}
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
                        {`${changeDot(voltage)} В`}
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
                    {`${changeDot(pfmFreq)} кГц`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Длительность импульса:
                    </div>
                    <div className="monitoring__row__field">
                    {`${changeDot(pulseDur)} мкс`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        {`${changeDot(voltage)} В`}
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
                    {`${changeDot(hysterWindow)} В`}
                    </div>
                </div>
                <div className="monitoring__row">
                    <div className="monitoring__row__header">
                        Выходное напряжение:
                    </div>
                    <div className="monitoring__row__field">
                        {`${changeDot(voltage)} В`}
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