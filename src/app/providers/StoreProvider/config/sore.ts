import { configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';

export function createReduxStore(initialState?: StateShema) {
    // моя функция для возможности переиспользования
    // так же для тестов будет возможность этот store отдельно создавать
    return configureStore<StateShema>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// пример из доки
// export const store = configureStore({
//     reducer: {},
//   })
