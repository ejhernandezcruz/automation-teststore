/// <reference types="cypress" />

describe('Alias and invoke', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
    });

    it('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').should('have.length', 16);
        cy.get('@thumbnail').find('.productcart')
            .invoke('attr', 'title').should('include','Add to Cart')
    });

    it.only('Calculate total of normal sale and sale products', () => {
        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        cy.get('@itemPrice').then($linkText => {
            cy.log($linkText);
        })
    });

});
