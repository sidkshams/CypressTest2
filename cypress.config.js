const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "cypress/support/e2e.js",
    firefoxWebSecurity: false ,
    failOnStatusCode: false,
    baseUrl: "http://automationpractice.com/index.php",
    
    
  },
});
