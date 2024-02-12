const URL = '/'


class QuickQuotePage {
  visitQuickQuotePage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
  }
}

export default QuickQuotePage
