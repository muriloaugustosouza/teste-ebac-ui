/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
/*http://lojaebac.ebaconline.art.br*/
/*aluno_ebac@teste.com
teste@teste.com*/

describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('te151stesenha@')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('#account_display_name').type('MAIOR')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'MAIOR')
    });


});