let profileId: string;
describe('Profile page tests', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile page loaded succesfully', () => {
        cy.getByTestId('ProfileCard.FirstName').should(
            'have.value',
            'testuser',
        );
    });
    it('Profile editing', () => {
        cy.updateProfile();
        cy.getByTestId('ProfileCard.FirstName').should(
            'have.value',
            'new firstname',
        );
        cy.getByTestId('ProfileCard.LastName').should(
            'have.value',
            'new lastname',
        );
    });
});
