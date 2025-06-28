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
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    env: {
      email: "teste@teste.com",
      senha: "senha123"
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}', // 👈 ESSENCIAL
    setupNodeEvents(on, config) {
    }
  }
});