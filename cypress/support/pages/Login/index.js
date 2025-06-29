import {ELEMENTS} from './elements'

class Login {

    botaoLogout(){
        cy.get(ELEMENTS.botaoLogout).should('be.visible').click()
    }
}

export default new Login