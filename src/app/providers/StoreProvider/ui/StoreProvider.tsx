import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/sore';
import { StateShema } from '../config/StateShema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateShema>;
}

export const StoreProvider = ({
    children,
    initialState,
}: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateShema);
    return <Provider store={store}>{children}</Provider>;
};
