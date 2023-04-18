/// <reference types="cypress" />
/*http://lojaebac.ebaconline.art.br*/
/*aluno_ebac@teste.com
teste@teste.com*/
context('Funcionalidade Login', ()=> {

    beforeEach(()   =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //visitou o site
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer Login com Sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com') //capturou e inseriu o login
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos', ()=> {
        cy.get('#username').type('ano_ebac@teste.com') //capturou e inseriu o login
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'desconhecido')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválidos', ()=> {
        cy.get('#username').type('aluno_ebac@teste.com') //capturou e inseriu o login
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'senha')

    })

})
