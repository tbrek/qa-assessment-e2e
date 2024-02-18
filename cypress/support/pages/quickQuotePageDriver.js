const URL = '/'

import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'
class QuickQuotePageDriver {

  //Selectors
  static quickQuoteFormWrapper = '#quick-quote-form'
  static titleDropdown = '[data-cy="title-dropdown-list"]' //Consider better selector in future
  static dropdownOptions = '[id^="react-select-"]' //I've used partial selector
  static ncdDropdown = '[datacy="react-select-ncd--list"]'
  static firstNameTextField = '[id="first-name"]'
  static lastNameTextField = '[name="family-name"]'
  static dayDOBField = '[id="day"]'
  static monthDOBField = '[id="month"]'
  static yearDOBField = '[id="year"]'
  static postcodeField = '[id="postcode"]'
  static postcodeValue = '[datacy="postcode-input"]'
  static carInsuranceRenewDropdown = '[datacy="react-select-month--list"]'
  static emailAddressField = '[id="email"]'
  static carIcon = '.car'
  static parkingIcon = '.parking'
  static getAQuickQuoteButton = '[class^="button button--primary button--quick-quote"]' //I've used partial selector
  static livedUKContinuouslyToggle = (option) => `[id="input-uk-born-toggle-${option}"]`
  static childrenDropdown = '[data-cy^="children-under-16-dropdown-list"] > .select-component'

  //Actions

  verifyQuickQuoteFormWrapperFields() {
    cy.get(QuickQuotePageDriver.quickQuoteFormWrapper)
    .within(() => {
    cy.get(QuickQuotePageDriver.ncdDropdown).should('be.visible')
    cy.get(QuickQuotePageDriver.dayDOBField).should('be.visible')
    cy.get(QuickQuotePageDriver.monthDOBField).should('be.visible')
    cy.get(QuickQuotePageDriver.yearDOBField).should('be.visible')
    cy.get(QuickQuotePageDriver.postcodeField).should('be.visible')
    cy.get(QuickQuotePageDriver.carInsuranceRenewDropdown).should('be.visible')
    cy.get(QuickQuotePageDriver.emailAddressField).should('be.visible')
    cy.get(QuickQuotePageDriver.carIcon).should('be.visible')
    cy.get(QuickQuotePageDriver.parkingIcon).should('be.visible')
    cy.get(QuickQuotePageDriver.getAQuickQuoteButton).should('be.visible').should('be.disabled')
    })
  }

  selectOptionNoClaimsDiscountDropdown(option) {
    cy.get(QuickQuotePageDriver.ncdDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }

  typePostcodeField(postcode) {
    cy.get(QuickQuotePageDriver.postcodeField).type(postcode)
    cy.get(QuickQuotePageDriver.postcodeValue).should('have.value', postcode)
  }

  selectCarInsuranceRenewDropdown(option) {
    cy.get(QuickQuotePageDriver.carInsuranceRenewDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }

  typeEmailAddressField(emailAddress) {
    cy.get(QuickQuotePageDriver.emailAddressField).type(emailAddress)
    cy.get(QuickQuotePageDriver.emailAddressField).should('have.value', emailAddress)
  }

  typeRandomEmailAddressField() {
    const randomValue = generateAlphabeticalRandomValue(10)
    const randomEmailAddress = `QATest${randomValue}@qatest.com`

    cy.get(QuickQuotePageDriver.emailAddressField).type(randomEmailAddress)
  }

  selectTitleDropdown(option) {
    cy.get(QuickQuotePageDriver.titleDropdown).click({force:true})
    //cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }

  typeFirstNameTextField(firstName) {
    cy.get(QuickQuotePageDriver.firstNameTextField).type(firstName)
    cy.get(QuickQuotePageDriver.firstNameTextField).should('have.value', firstName)
  }

  typeLastNameTextField(lastName) {
    cy.get(QuickQuotePageDriver.lastNameTextField).type(lastName)
    cy.get(QuickQuotePageDriver.lastNameTextField).should('have.value', lastName)
  }

  enterDOBintoDOBField(day, month, year) {
    cy.get(QuickQuotePageDriver.dayDOBField).type(day)
    cy.get(QuickQuotePageDriver.dayDOBField).should('have.value', day)
    cy.get(QuickQuotePageDriver.monthDOBField).type(month)
    cy.get(QuickQuotePageDriver.monthDOBField).should('have.value', month)
    cy.get(QuickQuotePageDriver.yearDOBField).type(year)
    cy.get(QuickQuotePageDriver.yearDOBField).should('have.value', year)
  }

  selectLivedUKContinuouslyToggle(option) {
    cy.get(QuickQuotePageDriver.livedUKContinuouslyToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.livedUKContinuouslyToggle(option)).should('be.checked')
  }

  selectChildrenDropdown(option) {
    cy.get(QuickQuotePageDriver.childrenDropdown).click({force:true})
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }
  
}

export default QuickQuotePageDriver
