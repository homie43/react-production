import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar)}>
      <div className={classes.links}>
        <Link to={"/"} className={classes.mainLink}>
          Главная
        </Link>
        <Link to={"/about"}>О сайте</Link>
      </div>
    </div>
  );
};
