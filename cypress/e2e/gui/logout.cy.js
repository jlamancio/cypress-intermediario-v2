describe('Logout', () => {
 
  beforeEach(() =>{
    cy.login()
    cy.visit('/')
  })
  
  it('successfully', () => {
    cy.logout()

    // Bp: sempre se deve fazer um assertion positivo (13) - validar o teste - e, se necessário, um negativo 
    // (15). 

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    cy.get('.qa-user-avatar').should('not.exist')

  })
})
