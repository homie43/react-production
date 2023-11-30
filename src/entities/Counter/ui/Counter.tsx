import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import classes from './Counter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue); // в данном случае мы используем реселект
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div className={classNames(classes.Counter, {}, [className])}>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button data-testid='decrement-btn' onClick={decrement}>
                {t('Уменьшение')}
            </Button>
            <Button data-testid='increment-btn' onClick={increment}>
                {t('Увеличение')}
            </Button>
        </div>
    );
};
