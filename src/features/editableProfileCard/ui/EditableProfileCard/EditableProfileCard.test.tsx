import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('readonly toggles off', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
    test('Cancel resets values', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
    });

    test('Validation error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Validation succes => PUT request to server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
