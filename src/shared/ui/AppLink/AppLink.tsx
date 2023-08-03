import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, ...otherProps } = props;

  return (
    <Link to={to} className={classNames(classes.AppLinks, {}, [className])} {...otherProps}>
      {children}
    </Link>
  );
};
