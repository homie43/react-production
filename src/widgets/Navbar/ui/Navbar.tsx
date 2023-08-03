import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar)}>
      <div className={classes.links}>
        <AppLink to={"/"} className={classes.mainLink}>
          Главная
        </AppLink>
        <Link to={"/about"}>О сайте</Link>
      </div>
    </div>
  );
};
