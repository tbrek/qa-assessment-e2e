const URL = '/'

import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'


class QuickQuotePageQuote {

  //Selectors
  static sorryMessage = '.sc-hKMtZM' //needs better selector

  //Actions
  verfiySorryCantCoverYouText() {
    cy.get(QuickQuotePageQuote.sorryMessage).contains("Sorry we can't cover you right now. We hope this isn't the end of the road.").should('exist')
  }

}

export default QuickQuotePageQuote
