const URL = '/'

import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'


class QuickQuotePageSuccess {

  //Selectors
  static getThisQuoteButton = '[data-cy="button-primary"]'
  static successMessage = '[id="quick-quote-user-got-successful-quote"]'
  static quickQuote = '[id="quick-quote"]'

  //Actions
  clickGetThisQuoteButton() {
    cy.get(QuickQuotePageSuccess.getThisQuoteButton).click()
  }

  verifySuccessMessage() {
    cy.get(QuickQuotePageSuccess.successMessage).contains("Success! Here's a quick estimate of your price.").should('be.visible')
  }
  verifyQuickQuoteSuccessPage() {
    cy.get(QuickQuotePageSuccess.quickQuote).contains("Your estimated quote").should('be.visible')
    //Could add more checks here
  }

}

export default QuickQuotePageSuccess
