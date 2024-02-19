// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './GenericCommands'
import './randomValue'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Temporary fix for Trustpilot fireing with errors in test
beforeEach(() => {
  cy.clearCookies()
  cy.on('uncaught:exception', err => {
    expect(err.message).to.include('Ignoring error for now')
    return false
  })
  // cy.task('log', 'Before Hook')
})

after(() => {
  // cy.log('Global After Hook')
})
