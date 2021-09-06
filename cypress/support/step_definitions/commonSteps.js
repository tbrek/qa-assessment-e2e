/* eslint-disable cypress/no-unnecessary-waiting */
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import CommonPage from '../pages/commonPage'


const commonPage = new CommonPage()



// When steps

When('I click {string} button', function (buttonText) {
  cy.get(`button:contains(${buttonText})`).click({ force: true })
})

When('I double click {string} button', function (buttonText) {
  cy.get(`button:contains(${buttonText})`).dblclick({ force: true })
})

When('I dismiss cookie policy modal', () => {
  cy.url().then(urlString => {
    commonPage.dismissCookieModal(urlString)
  })
})

When('I set {string} cookie to {string}', function (cookie, value) {
  cy.setCookie(cookie, value, {
    domain: 'test.bymiles.co.uk',
  })
})

When('I reload the page', () => {
  cy.reload()
})

When('I visit {string}', function (url) {
  cy.visit(url)
})

When('I fill the promo form with {string} and {string}', function (name, email) {
  cy.log(name, email)
})

When('I note my quote_id down', () => {
  cy.getCookie('quoteId').then(cookie => {
    cy.wrap(cookie.value).as('quoteId')
  })
})

When('I click {string}', function (text) {
  cy.get('div').contains(text).click()
})

// Then steps

Then('I wait {int} second(s)', function (seconds) {
  cy.wait(1000 * seconds)
  cy.log(`Gone in ${seconds}s`)
})

Then('I should be on {string} page', function (page) {
  cy.url({
    timeout: 60000,
  }).should('include', `/${page}`)
})

Then('I should not be on {string} page', function (page) {
  cy.url({
    timeout: 60000,
  }).should('not.contain', `/${page}`)
})

Then('Call centre should be {string}', function (status) {
  commonPage.callCentreStatus(status)
})

Then('page should have a dataLayer,load GTM and virtual page name: {string}', function (pageName) {
  // GTM can be slow sometimes
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000)
  cy.window().then(window => {
    assert.isDefined(window.dataLayer, 'window.dataLayer is defined')
    assert.isDefined(
      window.dataLayer.find(x => x.event === 'gtm.js'),
      'GTM is loaded',
    )
    assert.isDefined(
      window.dataLayer.find(x => x.event === 'virtual page view'),
      'virtual page view is triggered',
    )
    assert.isDefined(
      window.dataLayer.find(x => x.page_name === `/ga-virtual/${pageName}`),
      'virtual page name is correct',
    )
  })
})

Then('I should be able to claim {string}', function (credit) {
  cy.get('span').contains(credit)
})

Then('I can log my quote_id', () => {
  cy.get('@quoteId').then(quoteId => {
    cy.log(quoteId)
  })
})

Then('I compare a screenshot with {string} page', function (pageName) {
  cy.compareSnapshot(pageName)
})

Then('I should see {string} on the page', function (text) {
  cy.contains(text).should('be.visible')
})

Then('I should not see {string} on the page', function (text) {
  cy.contains(text).should('not.exist')
})

Then('{string} button should be disabled', function (button_text) {
  cy.get(`button:contains(${button_text})`).should('be.disabled')
})

Then('{string} button should be enabled', function (button_text) {
  cy.get(`button:contains(${button_text})`).should('not.be.disabled')
})

Then('my {string} cookie should be correct', function (cookie) {
  switch (cookie) {
    case 'quoteId':
      cy.getCookie(cookie).should('not.have.property', 'value', 'undefined')
      break
    default:
      break
  }
})
