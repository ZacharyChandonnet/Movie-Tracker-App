/// <reference types="cypress" />
describe('Navigation', () => {
    it('Navigation vers toutes les routes de l\'application', () => {
        cy.visit('/trending');

        cy.get('[data-cy="favoris-link"]').click();
        cy.url().should('include', '/favoris');

        cy.get('[data-cy="recherche-link"]').click();
        cy.url().should('include', '/recherche');
        cy.get('[data-cy="recherche-title"]').contains('Résultats de recherche');

     
        cy.get('[data-cy="trending-link"]').click();
        cy.url().should('include', '/trending');
        cy.get('[data-cy="trending-title"]').contains('Trending');

        cy.visit('/route-inexistante');
        cy.url().should('include', '/trending');
    });
});
