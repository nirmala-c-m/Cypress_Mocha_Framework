const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    baseUrl: 'https://demo.guru99.com/test/newtours/login_sucess.php',
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      
    },
  
    retries: {
      runMode: 2,
      // openMode: 2, // Uncomment if needed
    },
  },

  env: {
    username: "testuser",
    password: "testpassword"
  },

});
