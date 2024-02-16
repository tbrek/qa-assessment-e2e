const URL = '/'


class QuickQuotePageDriver {

  //Selectors
  static titleDropdown = '[data-cy="title-dropdown-list"]' //Consider better selector in future
  static dropdownOptions = '[id^="react-select-"]' //I've used partial selector
  static firstNameTextField = '[id="first-name"]'
  static lastNameTextField = '[name="family-name"]'
  static dayDOBField = '[id="day"]'
  static monthDOBField = '[id="month"]'
  static yearDOBField = '[id="year"]'
  static livedUKContinuouslyToggle = (option) => `[id="input-uk-born-toggle-${option}"]`
  static childrenDropdown = '[data-cy^="children-under-16-dropdown-list"] > .select-component'

  //Actions
  selectTitleDropdown(option) {
    cy.get(QuickQuotePageDriver.titleDropdown).click({force:true})
    //cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }

  typeFirstNameTextField(firstName) {
    cy.get(QuickQuotePageDriver.firstNameTextField).type(firstName)
    cy.get(QuickQuotePageDriver.firstNameTextField).should('have.value', firstName)
  }

  typeLastNameTextField(lastName) {
    cy.get(QuickQuotePageDriver.lastNameTextField).type(lastName)
    cy.get(QuickQuotePageDriver.lastNameTextField).should('have.value', lastName)
  }

  enterDOBintoDOBField(day, month, year) {
    cy.get(QuickQuotePageDriver.dayDOBField).type(day)
    cy.get(QuickQuotePageDriver.dayDOBField).should('have.value', day)
    cy.get(QuickQuotePageDriver.monthDOBField).type(month)
    cy.get(QuickQuotePageDriver.monthDOBField).should('have.value', month)
    cy.get(QuickQuotePageDriver.yearDOBField).type(year)
    cy.get(QuickQuotePageDriver.yearDOBField).should('have.value', year)
  }

  selectLivedUKContinuouslyToggle(option) {
    cy.get(QuickQuotePageDriver.livedUKContinuouslyToggle(option)).click({force:true})
    //Consider adding a check here e.g. to be checked - seems like the selector changes when clicked however
    //cy.get(QuickQuotePage.livedUKContinuouslyToggle(option)).should('be.checked')
  }

  selectChildrenDropdown(option) {
    cy.get(QuickQuotePageDriver.childrenDropdown).click({force:true})
    cy.get(QuickQuotePageDriver.dropdownOptions).contains(option).click()
  }
  
}

export default QuickQuotePageDriver
