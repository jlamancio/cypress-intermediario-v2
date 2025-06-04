describe('Logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')

    })


    it('Testar logout com sucesso', () => {
        /* ------ comando customizado para logout ------ */ 
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
     
       
    })
})