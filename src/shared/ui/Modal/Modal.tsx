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
    //
    const [isClosing, setIsClosing] = React.useState(false); // состояние отвечающее за закрытое окно
    const timeRef = React.useRef<ReturnType<typeof setTimeout>>();

    // закрыть Modal
    const closeHandler = React.useCallback(() => {
        // useCallback мемоизирует значение функции, чтобы она каждый раз не отрабатывала заново
        if (onClose) {
            setIsClosing(true);
            // плавное закрытие Modal
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, TIMEOUT_DELAY);
        }
    }, [onClose]);

    // убираем всплытие событий
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // логика закрытия модал по нажатия на эскейп
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

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

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
