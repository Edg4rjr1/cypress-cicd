import { faker } from '@faker-js/faker';
import CadastroEspecialista from '../support/pages/Dashboard/index.js'
describe('Acessando e Cadastrando na página de dashboard', () => {

  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('senha'));
   
  });

  it('deve cadastrar um novo especialista com sucesso', () => {
    const dadosDoEspecialista = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password({ length: 10 }), 
      especialidade: 'Clínica Geral',
      crm: faker.string.numeric(6),
      telefone: faker.phone.number('##-#####-####'), 
      imagemUrl: faker.image.avatar(),
      endereco: {
        cep: faker.location.zipCode('#####-###'), 
        rua: faker.location.streetAddress(),
        bairro: faker.location.county(),
        numero: faker.location.buildingNumber(),
        complemento: 'Bloco A, Apt 10', 
        estado: 'SP' 
      }
    };
    cy.cadastroEspecialista(dadosDoEspecialista);  
    CadastroEspecialista.ativarCheckBox() 
    CadastroEspecialista.checkbox(2)

  });


});