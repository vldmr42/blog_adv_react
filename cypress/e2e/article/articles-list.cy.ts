describe('Articles test', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });
    it('Articles page renders succesfully', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
