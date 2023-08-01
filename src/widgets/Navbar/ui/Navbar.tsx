import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

export const Navbar = () => {
  return (
    <div className={classNames("nvbar")}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
    </div>
  );
};
