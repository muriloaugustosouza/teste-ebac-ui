/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto', () => {
        cy.get('[class="product-block grid"]')
            //.first() primeiro
            //.last() ultimo
            //.eq(3) quarto
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 30

        cy.get('[class="product-block grid"]')
            .contains('Atlas Fitness Tank')
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)    
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')    
    });

});