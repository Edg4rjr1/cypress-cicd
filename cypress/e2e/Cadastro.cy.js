
import CadastroPage from '../support/pages/Cadastro/index.js'; 

describe('Funcionalidade de Cadastro de Usuário', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });

    it('Deve realizar um cadastro completo com informações válidas e verificar o sucesso', () => {
        const dadosDoNovoUsuario = {
            nome: 'Junior Teste',
            cnpj: '151545151',
            email: `teste${Cypress._.random(0, 10000)}@teste.com`,
            senha: 'senha123',
            senhaVerificada: 'senha123',
            telefone: '0011223344',
            cep: '64012354',
            rua: 'Rua Santos Dummont',
            numero: '6984',
            complemento: 'Ap 202',
            estado: 'pi' 
        }
        CadastroPage.clicarLinkParaCadastro(); 
        CadastroPage.realizarCadastroCompleto(dadosDoNovoUsuario);
        cy.log('Verificar sucesso do cadastro aqui.'); 
        cy.contains('Faça login em sua conta').should('be.visible'); 
      
    });


});