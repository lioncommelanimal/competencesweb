const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hn17dh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
