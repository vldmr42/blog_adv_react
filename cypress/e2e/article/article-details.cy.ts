let currentArticleId: string;
describe('Article-details test', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Article details renders succesfully', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('Article recommendations renders succesfully', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('Leave comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('Rate an article (fixture example)', () => {
        cy.intercept('GET', '**/articles/**', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
