const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "r3gh7o",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  watchForFileChanges: false,
  eyesIsDisabled: false,
  eyesBrowser:
    '[{"width":800,"height":600,"name":"chrome"},{"width":700,"height":500,"name":"firefox"},{"deviceName":"Pixel 2","screenOrientation":"portrait"}]',
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 1,
  eyesIsGlobalHooksSupported: false,
  eyesPort: 40959,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    defaultCommandTimeout: 8000,
    requestTimeout: 8000,
    baseUrl: "http://localhost:3000", // Change this to your app URL
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
