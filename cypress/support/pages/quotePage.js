const URL = '/quote'
const YEARLY_POLICY = '.active > .title > :nth-child(1)'
// to be fixed
const MONTHLY_POLICY = ':nth-child(4) > .title'
const EXPLAINER_DISMISS_BUTTON = '.dismiss-preview'
const ASSUMPTION_MODAL_CHECK = '[datacy="assumptions-confirm"]'
const CONFIRM_ASSUMPTION_BUTTON = '[datacy="confirmation"]'

class QuotePage {
  visitQuotePage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
  }

  clickThroughTheExplainer() {
    cy.get('div[datacy="intro-modal-0"]').click()
    cy.get('div[datacy="intro-modal-1"]').click()
    cy.get('div[datacy="intro-modal-2"]').click()
  }

  agreeOnAssumptionModal() {
    cy.get(ASSUMPTION_MODAL_CHECK).click()
    cy.get(CONFIRM_ASSUMPTION_BUTTON).click()
  }

  choosePaymentFrequency(requested_payment_frequency) {
    // purchaseDate == "correct" ? cy.get(IS_PURCHASED_CORRECT_YES_BUTTON).click() : cy.get(IS_PURCHASED_CORRECT_NO_BUTTON).click()

    if (requested_payment_frequency === 'yearly') {
      cy.get(YEARLY_POLICY).click()
    } else {
      cy.get(MONTHLY_POLICY).click()
    }
  }

  dismissExplainerVideo() {
    cy.get(EXPLAINER_DISMISS_BUTTON).click()
  }

  visitDeepLinkURL() {
    cy.viewport(1200, 1600)
    cy.get('@deepLinkURL').then(deepLinkURL => {
      cy.visit(deepLinkURL)
    })
  }
}

export default QuotePage
