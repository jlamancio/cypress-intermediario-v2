describe('Login', () => {
  it.only('successfully / logon', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  
  })

})
