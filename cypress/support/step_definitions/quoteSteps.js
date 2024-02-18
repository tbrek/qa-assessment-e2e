import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'
import QuickQuotePageDriver from '../pages/quickQuotePageDriver'
import QuickQuotePageSuccess from '../pages/quickQuotePageSuccess'
import { generateRandomValue, generateAlphabeticalRandomValue, generateNumericalRandomValue } from '../randomValue'

let quickQuotePage = new QuickQuotePage()
let quickQuotePageDriver = new QuickQuotePageDriver()
let quickQuotePageSuccess = new QuickQuotePageSuccess()

// Given steps

//1st Section of Quick Quote Steps - TEST / PROD
Given('I am on the quick quote page {string}', (env) => {
  quickQuotePage.visitQuickQuotePage(env)
})

And('The user can see the Registration Field is visible {string}', (env) =>{
  quickQuotePage.verifyEnterYourRegistrationField(env)
})

Then('The user enters a registration into Registration Field {string} {string}', (env, reg) => {
  quickQuotePage.typeIntoEnterYourRegistrationField(env, reg)
})

//1st Section of Quick Quote Steps - TEST
Then('The user clicks Find My Car button', () =>{
  quickQuotePage.clickFindCarButton()
})

//1st Section of Quick Quote Steps - PROD
Then('The user clicks Get A Quick Quote button', () =>{
  quickQuotePage.clickGetAQuickQuoteButtonPROD()
})

Then('The user clicks Yes Continue button within Mileage field', () =>{
  quickQuotePage.clickQuickQuoteMilageContinueButton()
})

//2nd Section of Quick Quote Steps - PROD
Then('The user can see the Fields on the One four to go page are visible', () =>{
  quickQuotePageDriver.verifyQuickQuoteFormWrapperFields()
})

Then('The user selects an option within No Claims Discount Dropdown {string}', (option) => {
  quickQuotePageDriver.selectOptionNoClaimsDiscountDropdown(option)
})

Then('The user enters a Postcode within Postcode Field {string}', (postcode) => {
  quickQuotePageDriver.typePostcodeField(postcode)
})

Then('The user enters a Renewal Month within Car Insurance Renewal Dropdown {string}', (renewalMonth) => {
  quickQuotePageDriver.selectCarInsuranceRenewDropdown(renewalMonth)
})

Then('The user enters an Email Address within Email Address Field {string}', (emailAddress) => {
  quickQuotePageDriver.typeEmailAddressField(emailAddress)
})

Then('The user enters a Random Email Address within Email Address Field', () => {
  quickQuotePageDriver.typeRandomEmailAddressField()
})

Then('The user drags Car Icon to Parking Icon', () => {
  quickQuotePageDriver.dragCarIconToParkingIcon()
})

Then('The user clicks Get A Quick Quote Button', () => {
  quickQuotePageDriver.clickGetAQuickQuoteButton()
})

Then('The user clicks Get This Quick Quote Button', () => {
  quickQuotePageSuccess.clickGetThisQuoteButton()
})

//3rd Section of Quick Quote Steps - Car
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

//4th Section of Quick Quote Steps - Driver
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

Then('The user enters a postcode and selects their address {string} {string}', (postcode, address) => {
  quickQuotePageDriver.enterAddressIntoFindAddressField(postcode, address)
})

Then('The user enters a Random Email Address within Email Address Driver Details Field', () => {
  quickQuotePageDriver.typeRandomEmailAddressDriverDetailsField()
})

Then('The user enters a Random Mobile Number within Mobile Number Field', () => {
  quickQuotePageDriver.typeRandomMobileNumberIntoMobileField()
})

Then('The user selects an option within Employment Status dropdown {string}', (option) => {
  quickQuotePageDriver.selectEmploymentStatusDropdown(option)
})

Then('The user selects an options Your Driving Section {string} {string} {string}', (kindOfDriving, yearsOfDriving, ncd) => {
  quickQuotePageDriver.selectYourDrivingDropdown(kindOfDriving, yearsOfDriving, ncd)
})

Then('The user selects an option within Medical Condition Toggle {string}', (option) => {
  quickQuotePageDriver.selectMedicalConditionsToggle(option)
})

Then('The user selects an option within Has Claims Toggle {string}', (option) => {
  quickQuotePageDriver.selectHasClaimsToggle(option)
})

Then('The user selects an option within Has Motor Convictions Toggle {string}', (option) => {
  quickQuotePageDriver.selectHasMotorConvictionsToggle(option)
})

Then('The user selects an option within Has Criminal Convictions Toggle {string}', (option) => {
  quickQuotePageDriver.selectHasCriminalConvictionsToggle(option)
})

Then('The user clicks Continue Cover Button', () => {
  quickQuotePageDriver.clickContinueCoverButton()
})

//