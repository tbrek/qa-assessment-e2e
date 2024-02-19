const URL = '/'

import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'
class QuickQuotePageDriver {

  //Selectors
  static quickQuoteFormWrapper = '#quick-quote-form'
  static titleDropdown = '[data-cy="title-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
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
  static parkedCarCompleted = '.end_car'
  static getAQuickQuoteButton = '[class^="button button--primary button--quick-quote"]' //I've used partial selector
  static livedUKContinuouslyToggle = (option) => `[id="input-uk-born-toggle-${option}"]`
  static childrenDropdown = '[data-cy="children-under-16-dropdown-list"] > .select-component > .css-j9hmdt'
  static findAddressField = '[id="find-address"]'
  static findAddressButton ='[data-cy="home-address-find-address-button"]'
  static homeAddressDropdown = '[data-cy="home-address-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static emailAddressFieldDriverDetails = '[data-cy="email-input"]'
  static mobileNumberField = '[data-cy="mobile-number-input"]'
  static employmentStatusDropdown = '[data-cy="employment-status-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static whatKindOfDrivingLicenceDropdown = '[data-cy="licence-type-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static howManyYearsDrivingLicenceDropdown = '[data-cy="licence-date-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static ncdDriverDetailsDropdown = '[data-cy="ncd-date-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static medicalConditionsToggle = (option) => `[id="input-has-medical-conditions-toggle-${option}"]`
  static hasClaimsToggle = (option) => `[id="input-has-claims-toggle-${option}"]`
  static hasMotorConvictionsToggle = (option) => `[id="input-has-motoring-convictions-toggle-${option}"]`
  static hasCriminalConvictionsToggle = (option) => `[id="input-has-criminal-convictions-toggle-${option}"]`
  static continueCoverButton = '[data-cy="continue-cover-button"]'

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

  dragCarIconToParkingIcon() {

    //Drag Car Icon to Parking Icon using '@4tw/cypress-drag-drop' plugin
    const carIconSelector = QuickQuotePageDriver.carIcon
    const parkingIconSelector = QuickQuotePageDriver.parkingIcon

    cy.get(carIconSelector).as('carIcon')
    cy.get(parkingIconSelector).as('parkingIcon')
    cy.get('@carIcon').drag('@parkingIcon')
    cy.get('@carIcon').drag('@parkingIcon', {force:true}) //repeat this twice - weird issue with Cypress drag and drop
    cy.get(QuickQuotePageDriver.parkedCarCompleted).should('exist')
  }

  clickGetAQuickQuoteButton() {
    cy.get(QuickQuotePageDriver.getAQuickQuoteButton).should('be.enabled').click()
  }

  selectTitleDropdown(option) {
    cy.get(QuickQuotePageDriver.titleDropdown).click({force:true})
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
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

  enterAddressIntoFindAddressField(postcode, address) {
    cy.get(QuickQuotePageDriver.findAddressField).type(postcode)
    cy.get(QuickQuotePageDriver.findAddressField).should('have.value', postcode)
    cy.get(QuickQuotePageDriver.findAddressButton).click()
    cy.get(QuickQuotePageDriver.homeAddressDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(address).click()
  }

  typeRandomEmailAddressDriverDetailsField() {
    const randomValue = generateAlphabeticalRandomValue(10)
    const randomEmailAddress = `QATest${randomValue}@qatest.com`

    cy.get(QuickQuotePageDriver.emailAddressFieldDriverDetails).first().type(randomEmailAddress)
  }

  typeRandomMobileNumberIntoMobileField() {
    const randomValue = generateNumericalRandomValue(9)
    const randomMobileNumber = randomValue

    cy.get(QuickQuotePageDriver.mobileNumberField).first().type('07'+randomMobileNumber)
  }

  selectEmploymentStatusDropdown(option) {
    cy.get(QuickQuotePageDriver.employmentStatusDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }
  
  selectYourDrivingDropdown(kindOfDriving, yearsOfDriving, ncd) {
    cy.get(QuickQuotePageDriver.whatKindOfDrivingLicenceDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(kindOfDriving).click()

    cy.get(QuickQuotePageDriver.howManyYearsDrivingLicenceDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(yearsOfDriving).click()

    cy.get(QuickQuotePageDriver.ncdDriverDetailsDropdown).click()
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(ncd).click()
  }

  selectMedicalConditionsToggle(option) {
    cy.get(QuickQuotePageDriver.medicalConditionsToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.medicalConditionsToggle(option)).should('be.checked')
  }

  selectHasClaimsToggle(option) {
    cy.get(QuickQuotePageDriver.hasClaimsToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.hasClaimsToggle(option)).should('be.checked')
  }

  selectHasMotorConvictionsToggle(option) {
    cy.get(QuickQuotePageDriver.hasMotorConvictionsToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.hasMotorConvictionsToggle(option)).should('be.checked')
  }

  selectHasCriminalConvictionsToggle(option) {
    cy.get(QuickQuotePageDriver.hasCriminalConvictionsToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.hasCriminalConvictionsToggle(option)).should('be.checked')
  }

  clickContinueCoverButton() {
    cy.get(QuickQuotePageDriver.continueCoverButton).click()

  }
}

export default QuickQuotePageDriver
