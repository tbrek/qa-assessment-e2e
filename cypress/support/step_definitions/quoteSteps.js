import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import CarPage from '../pages/carPage'
import CoverPage from '../pages/coverPage'
import DriversPage from '../pages/driversPage'

import QuotePage from '../pages/quotePage'
import generateEmailAddress from '../../utils/generateEmailAddress'

let carPage = new CarPage()
let coverPage = new CoverPage()
let driversPage = new DriversPage()
let quotePage = new QuotePage()

// Given steps

Given('I am on the car page', () => {
  carPage.visitCarPage()
})

Given('I am on the drivers page', () => {
  driversPage.visitDriversPage()
})

Given('I am on the cover page', () => {
  coverPage.visitCoverPage()
})

Given('my car has {int} modification(s)', function (hasModifications) {
  carPage.selectModifications(hasModifications)
})

Given('I choose {string} policy', function (requested_payment_frequency) {
  quotePage.choosePaymentFrequency(requested_payment_frequency)
})

Given('I add {string} breakdown cover', function (requestedBreakdownCover) {
  coverPage.addBreakdownCover(requestedBreakdownCover)
})

Given('I open breakdown cover modal', () => {
  coverPage.openBreakdownCoverModal()
})

Given('I open legal cover modal', () => {
  coverPage.openLegalCoverModal()
})

Given('I change my breakdown cover to {string}', function (requestedBreakdownCover) {
  coverPage.changeBreakdownCover(requestedBreakdownCover)
})

Given('I remove breakdown cover', () => {
  coverPage.removeBreakdownCover()
})

Given('I add legal cover', function () {
  coverPage.addLegalCover()
})

Given('I remove legal cover', () => {
  coverPage.removeLegalCover()
})

// When steps

When('I enter {string} as my registration number', function (reg) {
  carPage.inputReg(reg)
})

When('I skip through the introduction modal', () => {
  carPage.acceptWhatHow()
})

When('I click This is not my car button', () => {
  carPage.resetCar()
})

When(/^purchase date is (correct|incorrect)$/, function (purchaseDate) {
  carPage.confirmPurchaseDate(purchaseDate)
})

When('{string} is the legal owner', function (carOwner) {
  carPage.selectCarOwner(carOwner)
})

When('{string} is the registered keeper', function (carKeeper) {
  carPage.selectCarKeeper(carKeeper)
})

When(/^my car (will|will not) be kept home overnight$/, function (keptAtHome) {
  carPage.confirmLocation(keptAtHome)
})

When(/^the mileage is (incorrect|correct)$/, function (isMileageCorrect) {
  carPage.confirmMileage(isMileageCorrect)
})

When('I choose {string} as my title', function (title) {
  driversPage.addTitle(title)
})

When('I add {string} as my first name', function (firstName) {
  driversPage.addFirstName(firstName)
})

When('I add {string} as my last name', function (lastName) {
  driversPage.addLastName(lastName)
})

When('I add {string} {string} {string} as my DOB', function (day, month, year) {
  driversPage.addDOB(day, month, year)
})

When(/^I have (not lived|lived) in UK since the age of 17$/, function (residency) {
  driversPage.setResidency(residency)
})

When('I have {int} children', function (children) {
  driversPage.setChildren(children)
})

When('I enter {string} as my postscode', function (postcode) {
  driversPage.setPostcode(postcode)
})

When('I choose {string} as my address', function (address) {
  driversPage.setAddress(address)
})
// Pass "random email"
When('I set {string} and {string} as my contact details', function (emailAddress, mobileNumber) {
  if ((emailAddress = 'random email')) {
    emailAddress = generateEmailAddress('quote', 'acceptance')
  }
  cy.wrap(emailAddress).as('email')
  driversPage.setContactDetails(emailAddress, mobileNumber)
})

When(
  'I set my marketing preferences to {string} {string} {string}',
  function (emailMarketing, phoneMarketing, postMarketing) {
    driversPage.setMarketingPreferences(emailMarketing, phoneMarketing, postMarketing)
  },
)

When('I set my employment as follows', function (employmentDetails) {
  driversPage.setEmployment(employmentDetails)
})

When('I set my licence details to', function (data) {
  driversPage.setLicenseDetails(data)
})

When('I set my medical conditions', () => {
  driversPage.setMedicalConditions()
})

When('I have {int} claim(s)', function (claimsCount, data) {
  driversPage.setClaims(claimsCount, data)
})

When('I set my NCD to {int}', yearsNCD => {
  driversPage.setNCD(yearsNCD)
})

When('I have 0 driving convictions', () => {
  driversPage.setDrivingConvictions()
})

When('I have {int} criminal convitction(s)', function (criminalConvictions) {
  driversPage.setCriminalConvictions(criminalConvictions)
})

When('I choose the same day cover', () => {
  coverPage.sameDayCover()
})

When('my inception date is in {int} day(s)', function (numberOfDays) {
  coverPage.setCoverDate(numberOfDays)
})

When('I set my voluntary excess to {string}', function (voluntaryExcess) {
  coverPage.setVoluntaryExcess(voluntaryExcess)
})

When('I confirm my delivery address', () => {
  newPayPage.confirmDeliveryAddress()
})

When('I create my account using {string} and {string}', function (emailAddress, password) {
  if (emailAddress === 'random email') {
    cy.get('@email').then(emailAddress => {
      newPayPage.createAccount(emailAddress, password)
    })
  } else if (emailAddress === 'new random email') {
    let newRandomEmail = generateEmailAddress('quote', 'ga')
    newPayPage.createAccount(newRandomEmail, password)
  } else {
    newPayPage.createAccount(emailAddress, password)
  }
})

When('I confirm my account details', () => {
  newPayPage.confirmAccountDetails()
})

When('I set my email as {string}', function (emailAddress) {
  newPayPage.setEmail(emailAddress)
})

When('I confirm my email as {string}', function (emailAddress) {
  newPayPage.confirmEmail(emailAddress)
})

When('I set my password to {string}', function (password) {
  newPayPage.setPassword(password)
})

When('I confirm my password as {string}', function (password) {
  newPayPage.confirmPassword(password)
})

When('I set my billing date', function () {
  newPayPage.confirmBillingDate()
})

When('I add my card details on new pay page', () => {
  newPayPage.addCardDetails()
})

When('I add the following the card details on new pay page as follow', function (data) {
  newPayPage.addCustomPaymentDetails(data.raw())
})

// Then steps

Then('I should see {string} error message', function (errorMessage) {
  newPayPage.assertErrorMessage(errorMessage)
})

// Legacy checkout

When('I click through explainer modal', () => {
  quotePage.clickThroughTheExplainer()
})

When('I agree on the assumption modal', () => {
  quotePage.agreeOnAssumptionModal()
})

When('I dismiss video explainer', () => {
  quotePage.dismissExplainerVideo()
})

When('I {string} breakdown cover', function (breakdownCover) {
  extrasPage.selectBreakdownCover(breakdownCover)
})

When('I {string} legal cover', function (legalCover) {
  extrasPage.selectLegalCover(legalCover)
})

When('I confirm tracker activation', () => {
  confirmPage.confirmTracker()
})

When('I confirm my address details', () => {
  payPage.confirmAddressDetails()
})

When('I set {string} as my email address', function (emailAddress) {
  if (emailAddress === 'random email') {
    cy.get('@email').then(emailAddress => {
      payPage.addEmail(emailAddress)
    })
  } else {
    payPage.addEmail(emailAddress)
  }
})

When('I set {string} as my password', function (password) {
  payPage.addPassword(password)
})

When('I confirm {string} as my password', function (password) {
  payPage.confirmPassword(password)
})

When('I confirm account details', () => {
  payPage.confirmAccountDetails()
})

When('I confirm my billing date', () => {
  payPage.confirmBillingDate()
})

When('I add my card details', () => {
  payPage.addCardDetails()
})

When('I confirm my payment details', () => {
  payPage.confirmPayentDetails()
})

When(/^I am (happy|not happy) with email marketing$/, function (marketing) {
  payPage.consentToEmailMarketing(marketing)
})

When('I visit my quote page', () => {
  quotePage.visitDeepLinkURL()
})

// Then steps

Then('I should see my (new )car details', () => {
  carPage.verifyCarDetails()
})

Then('I should be By Miles member', () => {
  successPage.verifyPurchasedPolicy()
})

Then('the following links should exists in the footer:', function (data) {
  explainerPage.assertFooterLinks(data.raw())
})
