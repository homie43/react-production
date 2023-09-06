import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                classes.Sidebar,
                { [classes.collapsed]: collapsed },
                [className]
            )}
        >
            <button type='button' onClick={onToggle}>
                toggle
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
            </div>
        </div>
    );
};
