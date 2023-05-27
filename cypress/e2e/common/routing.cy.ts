import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('NOT authorized user', () => {
        it('Navigate to main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigate to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigate to unknown address', () => {
            cy.visit('/qwer');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Navigate to profile page (auth)', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Navigate to articles list page (auth)', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
