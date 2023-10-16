/// <reference types="cypress" />
describe('Routing', () => {
  it('devrait rediriger à login si l\'utilisateur n\'est pas connecté', () => {
    cy.visit('/routeRandom');
    cy.url().should('include', '/login');
  });

  it('devrait rediriger à trending si l\'utilisateur est connecté', () => {
    cy.visit('/login');
    cy.get('[data-cy="fld_username"]').type('test FlickFlow');
    cy.get('[data-cy="fld_password"]').type('123456');
    cy.get('[data-cy="btn_auth"]').click();
    cy.get('[data-cy="trending-title"]').contains('Séries Trending');
  });
});