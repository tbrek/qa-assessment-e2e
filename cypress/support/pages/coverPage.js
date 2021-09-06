/* eslint-disable cypress/no-unnecessary-waiting */
const URL = '/cover'
const ADD_COVER_BUTTON = '[data-cy="add-cover"]'
const EDIT_COVER_BUTTON = '[data-cy="edit-cover"]'
const RAC_COVER_SECTION = '.rac-container'
const LEGAL_COVER_SECTION = '.legal-container'
const INCEPTION_DATE_DROPDOWN = 'input[id="react-select-inception_date-input"]'
const VOLUNTARY_EXCESS_DROPDOWN = 'input[id="react-select-excess-input"]'
const COMPULSORY_EXCESS_SECTION = '.comp-wrapper'
const COMPULSORY_EXCESS = '.compulsory-amount'

class CoverPage {
  visitCoverPage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
  }

  sameDayCover() {
    cy.get(INCEPTION_DATE_DROPDOWN).click({ force: true })
    cy.get('div[id="react-select-inception_date-option-0"]').click()
  }

  setCoverDate(numberOfDays) {
    cy.get(INCEPTION_DATE_DROPDOWN).click({ force: true })
    cy.get(`div[id="react-select-inception_date-option-${numberOfDays}"]`).click()
  }

  setVoluntaryExcess(voluntary_excess) {
    cy.get(VOLUNTARY_EXCESS_DROPDOWN).click({ force: true })
    cy.get('[id^="react-select-excess-option"]').contains(voluntary_excess).click()
  }

  addBreakdownCover(requestedBreakdownCover) {
    cy.get(RAC_COVER_SECTION).within(() => {
      cy.get(ADD_COVER_BUTTON).click()
    })
    this.setBreakdownCover(requestedBreakdownCover)
  }

  setBreakdownCover(requestedBreakdownCover) {
    switch (requestedBreakdownCover) {
      case 'Roadside, Recovery':
        cy.get('input[value="breakdown_rr"').click({ force: true })
        break
      case 'Roadside, Recovery, At Home, Onward Travel':
        cy.get('input[value="breakdown_rrahot"').click({ force: true })
        break
      case 'Roadside, Recovery, At Home, Onward Travel, European Cover':
        cy.get('input[value="breakdown_rrahote"').click({ force: true })
        break
      default:
        break
    }
    cy.get('button:contains("Confirm")').click()
  }

  openBreakdownCoverModal() {
    cy.get(RAC_COVER_SECTION).within(() => {
      cy.get(EDIT_COVER_BUTTON).click()
    })
  }

  openLegalCoverModal() {
    cy.get(LEGAL_COVER_SECTION).within(() => {
      cy.get(EDIT_COVER_BUTTON).click()
    })
  }

  changeBreakdownCover(requestedBreakdownCover) {
    cy.get(RAC_COVER_SECTION).within(() => {
      cy.get(EDIT_COVER_BUTTON).click()
    })
    this.setBreakdownCover(requestedBreakdownCover)
  }

  removeBreakdownCover() {
    cy.get(RAC_COVER_SECTION).within(() => {
      cy.get(EDIT_COVER_BUTTON).click()
    })
    cy.get('input[value="none"]').click({ force: true })
    cy.get('button:contains("Confirm")').click()
  }

  addLegalCover() {
    cy.get(LEGAL_COVER_SECTION).within(() => {
      cy.get(ADD_COVER_BUTTON).click()
    })
    cy.get('input[value="legal_cover_1"]').click({ force: true })
    cy.get('button:contains("Confirm")').click()
  }

  removeLegalCover() {
    cy.get(LEGAL_COVER_SECTION).within(() => {
      cy.get(EDIT_COVER_BUTTON).click()
    })
    cy.get('input[value="none"]').click({ force: true })
    cy.get('button:contains("Confirm")').click()
  }

  notePrice() {
    cy.get('.pay-today-price.desktop')
      .invoke('text')
      .then(payToday => {
        cy.wrap(parseFloat(payToday.replace(/[^0-9\.]+/g, ''))).as('oldPrice')
      })
  }

  comparePrices(diff, priceDiff) {
    cy.reload() // make sure we are grabbing refreshed price
    cy.wait(2000)
    cy.get('.pay-today-price.desktop')
      .invoke('text')
      .then(payToday => {
        let newPrice = parseFloat(payToday.replace(/[^0-9\.]+/g, ''))
        let delta = parseFloat(priceDiff.replace(/[^0-9\.]+/g, ''))
        cy.get('@oldPrice').then(oldPrice => {
          if (diff === 'up') {
            expect(newPrice.toFixed(2)).to.eq((oldPrice + delta).toFixed(2))
          } else {
            expect(newPrice.toFixed(2)).to.eq((oldPrice - delta).toFixed(2))
          }
        })
      })
  }

  assertCompulsoryExcess() {
    cy.get('@compulsoryExcess').then(compulsory_excess => {
      cy.get(COMPULSORY_EXCESS_SECTION).contains(compulsory_excess)
    })
  }
}

export default CoverPage
