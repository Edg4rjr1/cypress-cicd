
import { ELEMENTS } from "./elements.js";
class CadastroEspecialista {

    botaoCadastrarEspecialista(){
        cy.get(ELEMENTS.botaoCadastrarEspecialista).click()
    }

    checkbox(index){
          cy.get(ELEMENTS.checkbox).eq(index).check({ force: true })

    }

    ativarCheckBox(){
        cy.get(ELEMENTS.ativarCheckBox).click()
    }
}

export default new CadastroEspecialista





