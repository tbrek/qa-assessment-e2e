const URL = '/'


class QuickQuotePage {

  //1st Section Selectors
  static carWrapper = '[class="car-wrapper"]'
  static enterYourRegNumberText = '[class="question-text-container"]'
  static registrationInputTextField = '[id="reg"]'
  static findCarButton = '[data-cy="find-car-button"]'

  //2nd Section Selectors
  static carInfoContainer = '[data-cy="car-info-container"]'
  static carModificationsToggle = (option) => `[id="input-has-modifications-toggle-${option}"]` //For reusablity
  static notListedAboveCheckbox = '[id="Not-listed-above"]'
  static purchaseDateToggle = (option) => `[id="input-purchase-date-toggle-${option}"]` //For reusablity
  static legalOwnerOfCarDropdown = '[id="react-select-2-input"]' //Consider better selector in future
  static legalOwnerOfCarDropdownOptions = '[id^="react-select-2-option-"]' //I've used partial selector
  static registeredKeeperOfCarDropdown = '[id="react-select-3-input"]' //Consider better selector in future
  static registeredKeeperOfCarDropdownOptions = '[id^="react-select-3-option-"]' //I've used partial selector
  static homeOvernightToggle = (option) => `[id="input-is-parked-home-toggle-${option}"]` //For reusablity
  static estimatedMileageTextField = '[id="estimated-mileage"]'
  static continueDriverButton = '[data-cy="continue-driver-button"]'

  //Actions
  visitQuickQuotePage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
    //Added the following custom command - if allow all cookies appears then click allow all button
    cy.clickAcceptAllCookies()

  }

  //1st Section of Quick Quote page
  verifyEnterYourRegistrationField() {
    cy.get(QuickQuotePage.carWrapper).should('exist')
    .within(() => {
      //Verifying the text here but if it changes often we should remove this check
      cy.get(QuickQuotePage.enterYourRegNumberText).contains('Enter your registration number.').should('be.visible')
      cy.get(QuickQuotePage.registrationInputTextField).should('be.visible')
      cy.get(QuickQuotePage.findCarButton).should('be.visible')
    })
  }

  typeIntoEnterYourRegistrationField(reg) {
    cy.get(QuickQuotePage.registrationInputTextField).type(reg)
    cy.get(QuickQuotePage.registrationInputTextField).should('have.value', reg)
  }

  clickFindCarButton() {
    cy.get(QuickQuotePage.findCarButton).should('be.enabled')
    cy.get(QuickQuotePage.findCarButton).click()
  }

  //2nd Section of Quick Quote page
  verifyCarInfoContainer() {
    cy.get(QuickQuotePage.carInfoContainer).should('be.visible')
  }

  selectCarModificationsToggle(option) {
    cy.get(QuickQuotePage.carModificationsToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.carModificationsToggle(option)).should('be.checked')
  }

  selectNotListedAboveCheckbox() {
    cy.get(QuickQuotePage.notListedAboveCheckbox).click()
    //Consider adding a check here e.g. to be checked
    //cy.get(QuickQuotePage.notListedAboveCheckbox).should('be.checked')
  }

  selectPurchaseDateToggle(option) {
    cy.get(QuickQuotePage.purchaseDateToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.carModificationsToggle(option)).should('be.checked')
  }

  selectLegalOwnerOfCarDropdown(option) {
    cy.get(QuickQuotePage.legalOwnerOfCarDropdown).click({force:true})
    cy.get(QuickQuotePage.legalOwnerOfCarDropdownOptions).contains(option).click()
    //Consider adding verification check here e.g. should have value option
  }

  selectRegisteredKeeperOfCarDropdown(option) {
    cy.get(QuickQuotePage.registeredKeeperOfCarDropdown).click({force:true})
    cy.get(QuickQuotePage.registeredKeeperOfCarDropdownOptions).contains(option).click()
    //Consider adding verification check here e.g. should have value option
  }

  selectHomeOvernightToggle(option) {
    cy.get(QuickQuotePage.homeOvernightToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.homeOvernightToggle(option)).should('be.checked')
  }

  typeIntoEstimatedMileageTextField(mileage) {
    //clear text before entering text
    cy.get(QuickQuotePage.estimatedMileageTextField).clear()
    cy.get(QuickQuotePage.estimatedMileageTextField).type(mileage)
    cy.get(QuickQuotePage.estimatedMileageTextField).should('have.value', mileage)
  }

  clickContinueDriverButton() {
    cy.get(QuickQuotePage.continueDriverButton).click()
  }
  
}

export default QuickQuotePage
