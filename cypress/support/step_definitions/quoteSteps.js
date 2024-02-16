import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'

let quickQuotePage = new QuickQuotePage()

// Given steps

Given('I am on the quick quote page', () => {
  quickQuotePage.visitQuickQuotePage()
})

And('The user can see the Registration Field is visible', () =>{
  quickQuotePage.verifyEnterYourRegistrationField()
})

Then('The user enters a registration into Registration Field {string}', (reg) => {
  quickQuotePage.typeIntoEnterYourRegistrationField(reg)
})

Then('The user clicks Find My Car button', () =>{
  quickQuotePage.clickFindCarButton()
})


//Added the following to a custom command within visitQuickQuotePage()
// And('If the cookie modal appears click Allow all', () => {
//   cy.clickAcceptAllCookies()
// })

// When steps

// Then steps

