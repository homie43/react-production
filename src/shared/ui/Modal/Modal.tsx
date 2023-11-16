import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';
import { ReactNode } from 'react';

interface ModalProps {
    className?: string;
    children?: ReactNode;
}

export const Modal = ({ className, children }: ModalProps) => {
    return (
        <div className={classNames(classes.Modal, {}, [className])}>
            <div className={classes.overlay}>
                <div className={classes.content}>{children}</div>
            </div>
        </div>
    );
};
