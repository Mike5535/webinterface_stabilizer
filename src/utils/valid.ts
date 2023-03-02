import { actionSetVoltage } from '@/store/actions/commonActions';

export const validateVoltage = (setVoltageRight, e: React.FormEvent) => {
    let voltage;
    let isSubmit = false;
    if (e.target instanceof HTMLInputElement) {
        voltage = (e.target as HTMLInputElement).value;
    } else {
        voltage = (e.target as HTMLElement).querySelector('input').value;
        isSubmit = true;
    }
    if (voltage.match(/^\d[,]?\d+$/)) {
        voltage = voltage.split(',').join('.');
    }
    if (voltage.match(/^\d[.,]?\d*$/) && voltage >= 0 && voltage <= 20) {
        setVoltageRight(true);
        if (isSubmit) {
            (e.target as HTMLElement).querySelector('input').value = '';
        }
        return { voltage };
    }

    voltage ? setVoltageRight(false) : setVoltageRight(true);
    return null;
}

export const handlerVoltage = (dispatch, setVoltageRight, e: React.FormEvent) => {
    e.preventDefault();
    const body = validateVoltage(setVoltageRight, e);
    if (body) {
        dispatch(actionSetVoltage(body));
    }
}

export const changeDot = (value) => {
    if (value.match(/^\d+[.]\d+$/)) {
        return value.split('.').join(',');
    }
    return value;
}