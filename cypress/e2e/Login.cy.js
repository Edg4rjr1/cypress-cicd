describe('Pagina de Login', () => {
    beforeEach(() => {
      cy.login(Cypress.env('email'), Cypress.env('senha'))
    })
  
    it('Verificar se dashboard está visível', () => {
    });

  })