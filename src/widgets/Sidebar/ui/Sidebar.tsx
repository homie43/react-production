import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};
