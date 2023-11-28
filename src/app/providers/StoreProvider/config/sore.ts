import { configureStore } from '@reduxjs/toolkit';

export function createReduxStore() {
    // моя функция для возможности переиспользования
    // так же для тестов будет возможность этот store отдельно создавать
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__,
    });
}

// пример из доки
// export const store = configureStore({
//     reducer: {},
//   })
