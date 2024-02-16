import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'
import QuickQuotePageDriver from '../pages/quickQuotePageDriver'

let quickQuotePage = new QuickQuotePage()
let quickQuotePageDriver = new QuickQuotePageDriver()

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

//2nd Section of Quick Quote Steps - Car
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

//3rd Section of Quick Quote Steps - Driver
Then('The user selects an option within Title dropdown {string}', (option) => {
  quickQuotePageDriver.selectTitleDropdown(option)
})

And('The user enters a first name into first name field {string}', (firstName) => {
  quickQuotePageDriver.typeFirstNameTextField(firstName)
})

And('The user enters a last name into last name field {string}', (lastName) => {
  quickQuotePageDriver.typeLastNameTextField(lastName)
})

Then('The user enters a DOB into DOB name field {string} {string} {string}', (day, month, year) => {
  quickQuotePageDriver.enterDOBintoDOBField(day, month, year)
})

Then('The user selects an option within Lived Continuously in UK toggle {string}', (option) => {
  quickQuotePageDriver.selectLivedUKContinuouslyToggle(option)
})

Then('The user selects an option within children dropdown {string}', (option) => {
  quickQuotePageDriver.selectChildrenDropdown(option)
})

