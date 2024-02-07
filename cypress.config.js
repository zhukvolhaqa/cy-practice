const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/', //home page
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'], //exclude those folders from test run
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: 'test911@test.net', 
    password: 'Password1!'
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});
