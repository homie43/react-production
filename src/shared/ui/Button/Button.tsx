import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear', // кнопка без всего(рамок, бэкграунда итд)
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'bacgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            // eslint-disable-next-line jsx-quotes
            type='button'
            className={classNames(classes.Button, { [classes[theme]]: true }, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
