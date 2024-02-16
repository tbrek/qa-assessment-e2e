const URL = '/'


class QuickQuotePage {

  //Selectors
  static registrationField = '[class="car-wrapper"]'
  static enterYourRegNumberText = '[class="question-text-container"]'
  static registrationInputTextField = '[id="reg"]'
  static findCarButton = '[data-cy="find-car-button"]'

  //Actions
  visitQuickQuotePage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
    //Added the following custom command - if allow all cookies appears then click allow all button
    cy.clickAcceptAllCookies()

  }

  verifyEnterYourRegistrationField() {
    cy.get(QuickQuotePage.registrationField).should('exist')
    .within(() => {
      //Verifying the text here but if it changes often we should remove this check
      cy.get(QuickQuotePage.enterYourRegNumberText).contains('Enter your registration number.').should('exist')
      cy.get(QuickQuotePage.registrationInputTextField).should('exist')
      cy.get(QuickQuotePage.findCarButton).should('exist')
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
  
}

export default QuickQuotePage
