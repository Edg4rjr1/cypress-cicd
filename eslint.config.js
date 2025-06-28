// eslint.config.cjs
const globals = require("globals");
const js = require("@eslint/js");
const cypress = require("eslint-plugin-cypress");
const chaiFriendly = require("eslint-plugin-chai-friendly");
const tseslint = require("typescript-eslint"); // Novo require

module.exports = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Manter como 'module' para parserOptions, mas o arquivo em si é CommonJS
      globals: {
        ...globals.browser,
        ...globals.node,
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly",
        assert: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        it: "readonly",
        describe: "readonly",
        context: "readonly",
        specify: "readonly",
        xcontext: "readonly",
        xdescribe: "readonly",
        xit: "readonly"
      }
    },
    plugins: {
      cypress: cypress,
      "chai-friendly": chaiFriendly,
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
  {
    files: ["cypress/e2e/**/*.js", "cypress/support/**/*.js"],
    rules: {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-pause": "error",
      ...cypress.configs.recommended.rules
    }
  }
);