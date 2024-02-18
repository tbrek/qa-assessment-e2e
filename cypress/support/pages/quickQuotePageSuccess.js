const URL = '/'

import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'


class QuickQuotePageSuccess {

  //Selectors
  static getThisQuoteButton = '[data-cy="button-primary"]'

  //Actions
  clickGetThisQuoteButton() {
    cy.get(QuickQuotePageSuccess.getThisQuoteButton).click()
  }

}

export default QuickQuotePageSuccess
