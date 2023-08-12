import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear", // кнопка без всего(рамок, бэкграунда итд)
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button className={classNames(classes.Button, { [classes[theme]]: true }, [className])} {...otherProps}>
      {children}
    </button>
  );
};
