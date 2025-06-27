// cypress.config.mjs
import { defineConfig } from "cypress"; // Mude de require para import

export default defineConfig({ // Mude de module.exports = para export default
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Se houver algum 'require' aqui dentro no futuro, ele também precisará ser alterado para 'import'
    },
    baseUrl: 'http://localhost:3000/',
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    env: {
      email: "teste@teste.com",
      senha:"senha123"
    }
  }
});