import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { profileActions, profileReducer } from './profileSlice';
import { ValidateProfileError } from '../consts/ValidateProfileError';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/ProfileSchema';

const profileData = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'last',
    first: 'first',
    city: 'Rome',
    currency: Currency.EUR,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: profileData,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data: profileData,
            form: profileData,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'test', first: 'test' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile(profileData),
            ),
        ).toEqual({
            form: profileData,
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
});
