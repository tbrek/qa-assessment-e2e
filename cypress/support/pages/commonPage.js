const COOKIE_MODAL_DISMISS_BUTTON = '[datacy="button-cookie"]'
const GET_IN_TOUCH = '.details'

class CommonPage {
  dismissCookieModal(url) {
    if (String(url).includes('checkout')) {
      cy.get('button:contains("I agree")').click()
    } else {
      cy.get(COOKIE_MODAL_DISMISS_BUTTON).click()
    }
  }

  callCentreStatus(status) {
    cy.get(GET_IN_TOUCH).contains(status)
  }
}

export default CommonPage
