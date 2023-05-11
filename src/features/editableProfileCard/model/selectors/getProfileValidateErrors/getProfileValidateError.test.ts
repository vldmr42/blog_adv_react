import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/ValidateProfileError';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.NO_DATA],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.NO_DATA]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
