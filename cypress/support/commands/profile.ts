export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'qwe' },
        body: {
            id: '4',
            first: 'testuser',
            lastname: 'testuser last name',
            age: 465,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
};

export const updateProfile = (
    firstname = 'new firstname',
    lastname = 'new lastname',
) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstName').clear().type(firstname);
    cy.getByTestId('ProfileCard.LastName').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname?: string,
                lastname?: string,
            ): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
