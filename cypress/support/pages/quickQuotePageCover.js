const URL = '/'

import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'


class QuickQuotePageCover {

  //Selectors
  static getThisQuoteButton = '[data-cy="button-primary"]'
  static policyStartDateDropdown = '[data-cy="inception-date-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static dropdownOptions = '[id^="react-select-"]' //I've used partial selector
  static firstDropdownOption = '[id^="react-select-"][id$="-option-0"]'
  static voluntaryExcessDropdown = '[data-cy="voluntary-excess-dropdown-list"] > .select-component > .css-j9hmdt > .css-1nvniqj'
  static getAQuoteButton = '[data-cy="confirm-cover-details"]'

  //Actions
  selectPolicyStartDateDropdown() {
    cy.get(QuickQuotePageCover.policyStartDateDropdown).click()
    cy.get(QuickQuotePageCover.firstDropdownOption).click() //select first option
  }

  selectVoluntaryExcessDropdown(option) {
    cy.get(QuickQuotePageCover.voluntaryExcessDropdown).click()
    cy.get(QuickQuotePageCover.dropdownOptions).contains(option).click()
  }

  clickGetAQuoteButton() {
    cy.get(QuickQuotePageCover.getAQuoteButton).click()
  }

}

export default QuickQuotePageCover
