describe('Pagina de Login', () => {
    beforeEach(() => {
      cy.login(Cypress.env('email'), Cypress.env('senha'))
    })
  
    it('Verificar se dashboard está visível', () => {
    });

    it('Fazer logout', () => {
      cy.visit('/dashboard')
      cy.get('.sc-fLcnxK').should('be.visible').click()
      cy.contains('Cadastre-se').should('be.visible')
    });

  })