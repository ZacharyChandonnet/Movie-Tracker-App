/// <reference types="cypress" />
describe('Test des différentes routes et ajout de favoris', () => {

    it('quand on appuie sur le lien favoris on arrive sur la page des favoris', () => {
        cy.visit('/favoris');

        cy.get('a').contains('Favoris').click();

        cy.url().should('include', '/favoris');
    });

    it('quand on appuie sur le lien Lisye de Séries on arrive sur la page d\'accueil', () => {
        cy.visit('/listeSerie');

        cy.get('a').contains('Liste de séries').click();

        cy.url().should('include', '/listeSerie');
    });

    it('on ajoute une série aux favoris', () => {
        cy.visit('/listeSerie');
    
        cy.get('button.favoris').eq(1).click();
    
        cy.url().should('include', '/listeSerie');
    });
});

describe('Déconnexion', () => {
    it('Doit se déconnecter avec succès', () => {
      cy.visit('/listeSerie');
  
      cy.contains('Déconnexion').click(); 
  
      cy.url().should('include', '/login');
    });
  });
