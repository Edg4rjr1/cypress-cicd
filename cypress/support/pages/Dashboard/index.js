
import { ELEMENTS } from "./elements.js";
class CadastroEspecialista {

    botaoCadastrarEspecialista(){
        cy.get(ELEMENTS.botaoCadastrarEspecialista).click()
    }

}

export default new CadastroEspecialista





