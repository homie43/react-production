import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { StateShema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return get counter value', () => {
        // в тесте проверям что селектор возвращает нужный участок state
        const state: DeepPartial<StateShema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateShema)).toEqual({ value: 10 });
    });
});
