describe('Vérification de la validation du formulaire lorsque l\'utilisateur est déconnecté', () => {
    it('Vérification de la validation du formulaire avec un username seulement', () => {
        cy.visit('/login');
        cy.get('[data-cy="fld_username"]').type('test FlickFlow');
        cy.get('[data-cy="formulaire"]').submit();
    });
    it('Vérification de la validation du formulaire avec un password seulement', () => {
        cy.visit('/login');
        cy.get('[data-cy="fld_password"]').type('123456');
        cy.get('[data-cy="formulaire"]').submit();
    });
});