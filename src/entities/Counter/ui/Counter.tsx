import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import classes from './Counter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
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
            <h1>{counterValue}</h1>
            <Button onClick={decrement}>DEC</Button>
            <Button onClick={increment}>INC</Button>
        </div>
    );
};
