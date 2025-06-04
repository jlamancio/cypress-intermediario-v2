describe('Login', () => {
  it('Testar login com usuário e senha válidos', () => {
    /* ------ comando customizado para login ------ */ 
    cy.login()
    cy.get('.qa-user-avatar').should('be.visible')
    
  })

})