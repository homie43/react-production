import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear', // кнопка без всего(рамок, бэкграунда итд)
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, square, theme, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [classes[theme]]: true,
        [classes.square]: square,
    };

    return (
        <button
            // eslint-disable-next-line jsx-quotes
            type='button'
            className={classNames(classes.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
