describe('Affichage des contenus suites aux requêtes asynchrones', () => {
    beforeEach(() => {
        cy.visit('/trending');
        cy.intercept('GET', '/trending', { fixture: 'trending.json' });
    });

    it('devrait afficher les contenus suite à la requête asynchrone', () => {
        cy.get('[data-testid="contenu"]').should('have.length.above', 0);
    });

    it('Afficher les details d\'une série', () => {
        cy.get('[data-testid="contenu"]').first().click();
        cy.get('[data-cy="serie-title"]').contains('Série');
    });

    it('Ajouter une série à la liste de favoris', () => {
        cy.get('[data-cy="btn-favoris"]').first().click();
        cy.get('[data-testid="favoris"]').should('have.length.above', 0);
    });
});