const { defineConfig } = require('cypress')
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/step_definitions/*.feature',

    supportFile: 'cypress/support/e2e.js',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [cucumber(config)],
        })
      )

      return config
    },
  },
})
