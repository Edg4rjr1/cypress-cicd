import Login from "../support/pages/Login";

describe('Pagina de Login', () => {
    beforeEach(() => {
      cy.login(Cypress.env('email'), Cypress.env('senha'))
    })
  
    it('Verificar se dashboard está visível', () => {
    });

    it('Fazer logout', () => {
      cy.visit('/dashboard')
      Login.botaoLogout()
      cy.contains('Cadastre-se').should('be.visible')
    });

  })