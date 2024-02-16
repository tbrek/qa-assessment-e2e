import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'

let quickQuotePage = new QuickQuotePage()

// Given steps

//1st Section of Quick Quote Steps
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

//2nd Section of Quick Quote Steps
Then('The user can see the Car Details within Car Info Container', () => {
  quickQuotePage.verifyCarInfoContainer()
})

Then('The user can see the Car Details within Car Info Container', () => {
  quickQuotePage.verifyCarInfoContainer()
})

Then('The user selects an option within Car Modification Toggle {string}', (option) => {
  quickQuotePage.selectCarModificationsToggle(option)
})

Then('The user selects checks the Not Listed Above check box', () => {
  quickQuotePage.selectNotListedAboveCheckbox()
})

Then('The user selects an option within Purchase Date Toggle {string}', (option) => {
  quickQuotePage.selectPurchaseDateToggle(option)
})

Then('The user selects an option within Legal Owner of this car dropdown {string}', (option) => {
  quickQuotePage.selectLegalOwnerOfCarDropdown(option)
})

Then('The user selects an option within Registered Keeper of Car dropdown {string}', (option) => {
  quickQuotePage.selectRegisteredKeeperOfCarDropdown(option)
})

Then('The user selects an option within Home Overnight Toggle {string}', (option) => {
  quickQuotePage.selectHomeOvernightToggle(option)
})

Then('The user enters mileage into Estimated Mileage Field {string}', (mileage) => {
  quickQuotePage.typeIntoEstimatedMileageTextField(mileage)
})

Then('The user clicks Continue / Driver button', () => {
  quickQuotePage.clickContinueDriverButton()
})


//Added the following to a custom command within visitQuickQuotePage()
// And('If the cookie modal appears click Allow all', () => {
//   cy.clickAcceptAllCookies()
// })

// When steps

// Then steps

