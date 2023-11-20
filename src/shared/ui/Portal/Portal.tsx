import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // то, что мы телепортируем
    element?: HTMLElement; // то, куда  телепортируем
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
    return createPortal(children, element);
};
