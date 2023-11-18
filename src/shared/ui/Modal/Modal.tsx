import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const TIMEOUT_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = React.useState(false);
    const timeRef = React.useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = React.useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            // плавное закрытие Modal
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, TIMEOUT_DELAY);
        }
    }, [onClose]);

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = React.useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <div className={classNames(classes.Modal, mods, [className])}>
            <div className={classes.overlay} onClick={closeHandler}>
                <div className={classes.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
