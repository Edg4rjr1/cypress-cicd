import { CadastroElements } from './elements.js';

class CadastroPage {
    visitarPaginaCadastro() {
        cy.visit('/cadastro'); 
        cy.location('pathname').should('equal', '/cadastro');
        cy.log('Navegou para a página de cadastro via URL direta.');
    }

   
    clicarLinkParaCadastro() {
        cy.get(CadastroElements.botaoCadastro).click(); 
        cy.location('pathname').should('equal', '/cadastro');
        cy.log('Clicou no link e navegou para o cadastro.');
    }

    // Método para preencher a primeira etapa do formulário de cadastro
    preencherPrimeiraEtapa(dadosPessoais) {
        cy.log('Preenchendo a primeira etapa do cadastro: Dados Pessoais/Acesso.');
        cy.get(CadastroElements.inputNome).type(dadosPessoais.nome);
        cy.get(CadastroElements.inputCNPJ).type(dadosPessoais.cnpj);
        cy.get(CadastroElements.inputEmail).type(dadosPessoais.email);
        cy.get(CadastroElements.inputSenha).type(dadosPessoais.senha);
        cy.get(CadastroElements.inputSenhaVerificada).type(dadosPessoais.senhaVerificada);
        cy.get(CadastroElements.botaoProximoPrimeiraEtapa).click();
    }

    // Método para preencher a segunda etapa do formulário de cadastro
    preencherSegundaEtapa(dadosEndereco) {
        cy.log('Preenchendo a segunda etapa do cadastro: Endereço.');
        cy.get(CadastroElements.inputTelefone).type(dadosEndereco.telefone);
        cy.get(CadastroElements.inputCEP).type(dadosEndereco.cep);
        cy.get(CadastroElements.inputRua).type(dadosEndereco.rua);
        cy.get(CadastroElements.inputNumero).type(dadosEndereco.numero);
        cy.get(CadastroElements.inputComplemento).type(dadosEndereco.complemento);
        cy.get(CadastroElements.inputEstado).type(dadosEndereco.estado);
        cy.get(CadastroElements.botaoFinalizarCadastro).click();
    }

    realizarCadastroCompleto(dadosCadastro) {
        this.preencherPrimeiraEtapa(dadosCadastro);
        this.preencherSegundaEtapa(dadosCadastro);
        cy.log('Fluxo de preenchimento de cadastro completo executado.');
    }
}

export default new CadastroPage();