import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('return value', () => {
        const state: DeepPartial<StateShema> = {
            counter: { value: 10 },
        };
        // в тесте проверям что селектор возвращает нужное значение
        expect(getCounterValue(state as StateShema)).toEqual(10);
    });
});
