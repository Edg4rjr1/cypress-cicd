// cypress.config.mjs
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    },

    projectId: "wb4odw",
    
    env: {
      email: "teste123@teste.com",
      senha: "senha123"
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}', 
    setupNodeEvents(on, config) {
    }
  }
});