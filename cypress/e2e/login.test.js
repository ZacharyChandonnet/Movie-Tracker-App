/// <reference types="cypress" />
describe("Test de connexion", () => {
    it("Doit vérifier que les champs ne sont pas vides avant de se connecter", () => {
      // Visitez la page de connexion
      cy.visit("/login");
  
      // Vérifiez que la page de connexion est affichée
      cy.get("h1").should("contain", "FlickFlow");
  
      // Remplissez le champ nom d'utilisateur
      cy.get("#username")
        .type("test_username")
        .should("have.value", "test_username");
  
      // Remplissez le champ mot de passe
      cy.get("#password")
        .type("mdp_test")
        .should("have.value", "mdp_test");
  
      // Cliquez sur le bouton Se connecter
      cy.get("button").contains("Se connecter").click();
    });
  });
