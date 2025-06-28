describe('Testes de API', () => {
    context('Testes em rotas com usuários autorizados', () =>{
        beforeEach(() =>{
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
    })
        it('Get via url front para teste em resposta da home', () => {
            cy.request('GET', '/').should((response) =>{
                expect(response.status).to.eq(200)
            })
        });    
    
        it('Verificar se o Token da autenticação é retornado após login via POST na api', () => {
            cy.get('@token').should('exist')
        });
    })
  
})
