import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'
import QuickQuotePageDriver from '../pages/quickQuotePageDriver'

let quickQuotePage = new QuickQuotePage()
let quickQuotePageDriver = new QuickQuotePageDriver()

//Prod steps

Given('I am on the quick quote page {string}', (env) => {
  quickQuotePage.visitQuickQuotePage(env)
})

And('The user can see the Registration Field is visible {string}', (env) =>{
  quickQuotePage.verifyEnterYourRegistrationField(env)
})

Then('The user enters a registration into Registration Field {string} {string}', (env, reg) => {
  quickQuotePage.typeIntoEnterYourRegistrationField(env, reg)
})

Then('The user clicks Find My Car button', () =>{
  quickQuotePage.clickFindCarButton()
})

Then('The user clicks Get A Quick Quote button', () =>{
  quickQuotePage.clickGetAQuickQuoteButtonPROD()
})

Then('The user clicks Yes Continue button within Mileage field', () =>{
  quickQuotePage.clickQuickQuoteMilageContinueButton()
})


