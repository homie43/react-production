import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/sore';

const store = createReduxStore();

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
