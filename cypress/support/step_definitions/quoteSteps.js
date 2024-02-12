import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'

let quickQuotePage = new QuickQuotePage()

// Given steps

Given('I am on the quick quote page', () => {
  quickQuotePage.visitQuickQuotePage()
})

// When steps

// Then steps

