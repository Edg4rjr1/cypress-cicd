Cypress.Commands.add('login', (email, senha) => {
  cy.session([email, senha], () => {
    cy.visit('/login')
    cy.get('[data-test="inputLoginEmail"]').type(email)
    cy.get('[data-test="inputLoginSenha"]').type(senha)
    cy.get('[data-test="botaoTeste"]').click()
    cy.location('pathname').should('equal', '/dashboard')
  })
})

// CADASTRO DE ESPECIALISTA
Cypress.Commands.add('cadastroEspecialista', (especialista) => {
  cy.visit('/dashboard');
  cy.get('.sc-pyfCe > :nth-child(2)').click()
  cy.get('[data-test="inputEspecialistaNome"]').type(especialista.nome);
  cy.get('[data-test="inputEspecialistaEmail"]').type(especialista.email);
  cy.get('[data-test="inputEspecialistaSenha"]').type(especialista.senha);
  cy.get('[data-test="inputEspecialistaSenhaVerificada"]').type(especialista.senha)
  cy.get('[data-test="inputEspecialistaEspecialidade"]').type(especialista.especialidade);
  cy.get('[data-test="inputEspecialistaCRM"]').type(especialista.crm);
  cy.get('[data-test="inputEspecialistaTel"]').type(especialista.telefone); 
  cy.get('[data-test="inputEspecialistaImagem"]').type(especialista.imagemUrl);

  if (especialista.endereco) {
    cy.get('[data-test="inputEspecialistaCEP"]').type(especialista.endereco.cep);
    cy.get('[data-test="inputEspecialistaRua"]').type(especialista.endereco.rua);
    cy.get('[data-test="inputEspecialistaComplemento"]').type(especialista.endereco.bairro);
    cy.get('[data-test="inputEspecialistaNumero"]').type(especialista.endereco.numero);
    cy.get('[data-test="inputEspecialistaEstado"]').type(especialista.endereco.estado);
  }
})

// LOGIN VIA API
Cypress.Commands.add('loginApi', (email, senha) => {
  return cy.request({
    method: "POST",
    url: Cypress.env("api_login"),
    body: {
      email: email,
      senha: senha
    }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.token).to.exist
    cy.wrap(response.body.token).as('token')
  })
})