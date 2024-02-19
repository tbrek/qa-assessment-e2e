//These commands are generic and could be used on all pages throughout the website

//Drag and Drop
import '@4tw/cypress-drag-drop'
//Accept All Cokies modal
Cypress.Commands.add('clickAcceptAllCookies', () => {
  
  if (cy.get('.cky-consent-bar').should('exist')) {
    cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').contains("Allow all").click()
  }
})