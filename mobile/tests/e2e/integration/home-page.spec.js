/// <reference types="Cypress" />

describe('Home Page', () => {
    it('should display the button login on the home page and go to login page', () => {
        cy.visit('/'); // go to the home page

        cy.get('.box')
            .should('contain.text', 'Se connecter');

        cy.get(':nth-child(2) > .mat-raised-button').click();

        cy.get('.mat-secondary')
            .should('contain.text', 'Reset');
    });
});