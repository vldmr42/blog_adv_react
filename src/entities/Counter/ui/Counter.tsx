import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/deprecated/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useSelector(getCounterValue);

    const { decrement, increment } = useCounterActions();
    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };
    const { t } = useTranslation();
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                {t('Increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                {t('Decrement')}
            </Button>
        </div>
    );
};
