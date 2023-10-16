describe('Recherche', () => {
  beforeEach(() => {
    cy.visit('/recherche');
  });
  it('devrait afficher les contenus suite à la requête asynchrone', () => {
    cy.get('[data-query="query"]').type('test');
    cy.get('button[aria-label="Rechercher"]').click();
    cy.get('[data-testid="contenu"]').should('have.length.above', 0);
    cy.get('[data-testid="contenu"]').first().click();
    cy.get('[data-cy="serie-title"]').contains('Série');
  });
});

