const URL = '/car'
const ENTER_REG_INPUT_BOX = '[id="reg-input"]'
const THIS_IS_NOT_MY_CAR_BUTTON = '[datacy="reset-car-desktop"]'
const HAS_MODIFICATIONS_YES_BUTTON = '[id="has_modifications-Yes-0"]'
const HAS_MODIFICATIONS_NO_BUTTON = '[id="has_modifications-No-1"]'
const IS_PARKED_AT_HOME_YES_BUTTON = 'input[id="is_parked_home-Yes-0"]'
const IS_PARKED_AT_HOME_NO_BUTTON = 'input[id="is_parked_home-No-1"]'
const IS_PURCHASED_CORRECT_YES_BUTTON = '[id="purchase_date_boolean-Yes-0"]'
const IS_PURCHASED_CORRECT_NO_BUTTON = '[id="purchase_date_boolean-No-1"]'
const IS_MILEAGE_CORRECT_YES_BUTTON = '[id="same_mileage-Yes-0"]'
const IS_MILEAGE_CORRECT_NO_BUTTON = '[id="same_mileage-No-1"]'

class CarPage {
  visitCarPage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
  }

  inputReg(reg) {
    cy.log(reg)
    cy.get(ENTER_REG_INPUT_BOX).eq(0).clear().type(reg)
  }

  acceptWhatHow() {
    cy.get('div[datacy="intro-modal-0"]').click()
    cy.get('div[datacy="intro-modal-1"]').click()
    cy.get('div[datacy="intro-modal-2"]').click()
  }

  verifyCarDetails() {
    cy.get(THIS_IS_NOT_MY_CAR_BUTTON).should('be.visible')
  }

  resetCar() {
    cy.get(THIS_IS_NOT_MY_CAR_BUTTON).click()
  }

  selectModifications(hasModifications) {
    if (hasModifications === 0) {
      cy.get(HAS_MODIFICATIONS_NO_BUTTON).click()
    } else {
      cy.get(HAS_MODIFICATIONS_YES_BUTTON).click()
    }
  }

  confirmPurchaseDate(purchaseDate) {
    if (purchaseDate === 'correct') {
      cy.get(IS_PURCHASED_CORRECT_YES_BUTTON).click()
    } else {
      cy.get(IS_PURCHASED_CORRECT_NO_BUTTON).click()
    }
  }

  selectCarOwner(carOwner) {
    cy.get('input[id="react-select-owner-input"]').click({ force: true })
    switch (carOwner) {
      case 'Policyholder (me)':
        cy.get('div[id="react-select-owner-option-0"]').click()
        break
      case 'Spouse':
        cy.get('div[id="react-select-owner-option-1"]').click()
        break
      case 'Civil partner':
        cy.get('div[id="react-select-owner-option-2"]').click()
        break
      case 'Common-law partner':
        cy.get('div[id="react-select-owner-option-3"]').click()
        break
      case 'Leased to one of the above':
        cy.get('div[id="react-select-owner-option-4"]').click()
        break
      case 'A parent or guardian':
        cy.get('div[id="react-select-owner-option-5"]').click()
        break
      case 'Other':
        cy.get('div[id="react-select-owner-option-6"]').click()
        break
      default:
        break
    }
  }

  selectCarKeeper(carKeeper) {
    cy.get('input[id="react-select-keeper-input"]').click({ force: true })
    switch (carKeeper) {
      case 'Policyholder (me)':
        cy.get('div[id="react-select-keeper-option-0"]').click()
        break
      case 'Spouse':
        cy.get('div[id="react-select-keeper-option-1"]').click()
        break
      case 'Civil partner':
        cy.get('div[id="react-select-keeper-option-2"]').click()
        break
      case 'Common-law partner':
        cy.get('div[id="react-select-keeper-option-3"]').click()
        break
      case 'Leased to one of the above':
        cy.get('div[id="react-select-keeper-option-4"]').click()
        break
      case 'A parent or guardian':
        cy.get('div[id="react-select-keeper-option-5"]').click()
        break
      case 'Other':
        cy.get('div[id="react-select-keeper-option-6"]').click()
        break
      default:
        break
    }
  }

  confirmLocation(keptAtHome) {
    if (keptAtHome === 'will') {
      cy.get(IS_PARKED_AT_HOME_YES_BUTTON).click()
    } else {
      cy.get(IS_PARKED_AT_HOME_NO_BUTTON).click()
    }
    cy.log(keptAtHome)
  }

  confirmMileage(isMileageCorrect) {
    if (isMileageCorrect === 'correct') {
      cy.get(IS_MILEAGE_CORRECT_YES_BUTTON).click()
    } else {
      cy.get(IS_MILEAGE_CORRECT_NO_BUTTON).click()
    }
  }


}

export default CarPage
