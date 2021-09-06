const URL = '/drivers'

class DriversPage {
  visitDriversPage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
  }

  addTitle(title) {
    cy.get('input[id="react-select-title-input"]').click({ force: true })
    switch (title) {
      case 'Mr':
        cy.get('div[id="react-select-title-option-0"]').click()
        break
      case 'Mrs':
        cy.get('div[id="react-select-title-option-1"]').click()
        break
      case 'Miss':
        cy.get('div[id="react-select-title-option-2"]').click()
        break
      case 'Ms':
        cy.get('div[id="react-select-title-option-3"]').click()
        break
      case 'Mx':
        cy.get('div[id="react-select-title-option-4"]').click()
        break
      case 'Dr':
        cy.get('div[id="react-select-title-option-5"]').click()
        break
      case 'Other':
        cy.get('div[id="react-select-title-option-6"]').click()
        break
      default:
        break
    }
  }

  addFirstName(firstName) {
    cy.get('input[name="first_names"]').clear().eq(0).type(firstName)
  }

  addLastName(lastName) {
    cy.get('input[name="last_names"]').clear().eq(0).type(lastName)
  }

  addDOB(day, month, year) {
    cy.get('input[datacy="dob-day"]').type(day)
    cy.get('input[datacy="dob-month"]').click().type(`${month}{enter}`)
    cy.get('input[datacy="dob-year"]').type(year)
  }

  setResidency(residency) {
    if (residency === 'lived') {
      cy.get('input[id="born_in_uk-Yes-0"]').click()
    } else {
      cy.get('input[id="born_in_uk-No-1"]').click()
    }
  }

  setChildren(children) {
    cy.get('input[id="react-select-children-input"]').click({ force: true })
    switch (children) {
      case 0:
        cy.get('div[id="react-select-children-option-0"]').click()
        break
      case 1:
        cy.get('div[id="react-select-children-option-1"]').click()
        break
      case 2:
        cy.get('div[id="react-select-children-option-2"]').click()
        break
      case 3:
        cy.get('div[id="react-select-children-option-3"]').click()
        break
      case 4:
        cy.get('div[id="react-select-children-option-4"]').click()
        break
      case children > 5:
        cy.get('div[id="react-select-children-option-5"]').click()
        break
      default:
        break
    }
  }

  setPostcode(postcode) {
    cy.get('input[name="postcode"]').type(postcode)
    cy.contains('FIND ADDRESS').click()
  }

  setAddress(address) {
    cy.get('.address-list').within(() => {
      cy.get('.address-option').contains(address).click()
    })
  }

  setContactDetails(emailAddress, mobileNumber) {
    cy.get('input[name="email"]').type(emailAddress)
    cy.get('input[name="mobile_number"]').type(mobileNumber)
  }

  setMarketingPreferences(emailMarketing, phoneMarketing, postMarketing) {
    cy.get(`input[id*="email-${emailMarketing}"]`).click()
    cy.get(`input[id*="post-${phoneMarketing}"]`).click()
    cy.get(`input[id*="phone-${postMarketing}"]`).click()
  }

  setEmployment(data) {
    var employmentDetails = data.raw()
    employmentDetails.shift()
    var [status, industry, job] = String(employmentDetails).split(',')
    cy.get('input[id="react-select-employment-input"]').click({ force: true })
    switch (status) {
      case 'Employed':
        cy.get('div[id="react-select-employment-option-0"]').click()
        break
      case 'Homemaker':
        cy.get('div[id="react-select-employment-option-1"]').click()
        break
      case 'Independent means':
        cy.get('div[id="react-select-employment-option-2"]').click()
        break
      case 'Retired':
        cy.get('div[id="react-select-employment-option-3"]').click()
        break
      case 'Self employed':
        cy.get('div[id="react-select-employment-option-4"]').click()
        break
      case 'Contractor':
        cy.get('div[id="react-select-employment-option-5"]').click()
        break
      case 'In full or part-time education':
        cy.get('div[id="react-select-employment-option-6"]').click()
        break
      case 'Not employed at the moment':
        cy.get('div[id="react-select-employment-option-7"]').click()
        break
      default:
        break
    }
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get('input[datacy="business"]').click().type(`${industry}{enter}`)
    cy.get('input[datacy="occupation"]').click().type(`${job}{enter}`)
  }

  setLicenseDetails(data) {
    var licenceDetails = data.raw()
    licenceDetails.shift()
    var [type, yearsHeld] = String(licenceDetails).split(',')
    cy.get('input[id="react-select-licence_type-input"]').click({ force: true })
    switch (type) {
      case 'Full UK car licence':
        cy.get('div[id="react-select-licence_type-option-0"]').click()
        break
      case 'Provisional UK car licence':
        cy.get('div[id="react-select-licence_type-option-1"]').click()
        break
      case 'Medical restricted UK car licence':
        cy.get('div[id="react-select-licence_type-option-2"]').click()
        break
      case 'Full EU licence':
        cy.get('div[id="react-select-licence_type-option-3"]').click()
        break
      case 'Provisional EU licence':
        cy.get('div[id="react-select-licence_type-option-4"]').click()
        break
      case 'Full Non-EU European licence':
        cy.get('div[id="react-select-licence_type-option-5"]').click()
        break
      case 'Full international licence':
        cy.get('div[id="react-select-licence_type-option-6"]').click()
        break
      case 'Other':
        cy.get('div[id="react-select-licence_type-option-7"]').click()
        break
      default:
        break
    }
    cy.get('input[id="react-select-licence_issued_date-input"]').click({ force: true })
    cy.get(`div[id="react-select-licence_issued_date-option-${yearsHeld}"]`).click()
  }

  setMedicalConditions() {
    cy.get('input[id="has_medical_conditions-No-1"]').click()
  }

  setClaims(claimsCount, data) {
    if (claimsCount === 0) {
      cy.get('input[id="has_claims-No-1"]').click()
    } else {
      cy.get('input[id="has_claims-Yes-0"]').click()
      var claims = data.raw()
      claims.shift()
      claims.forEach(function (row, index) {
        if (index !== 0) {
          cy.get('button[datacy="add-another-claim"]').click()
        }
        var [type, month, year, at_fault, lost_ncd] = String(row).split(',')
        cy.get('input[id="react-select-code-input"]').click({ force: true })
        switch (type) {
          case 'Accident':
            cy.get('div[id="react-select-code-option-0"]').click()
            break
          case 'Misfueling':
            cy.get('div[id="react-select-code-option-1"]').click()
            break
          case 'Weather Damage':
            cy.get('div[id="react-select-code-option-2"]').click()
            break
          case 'Fire':
            cy.get('div[id="react-select-code-option-3"]').click()
            break
          case 'Theft or Attempted Theft':
            cy.get('div[id="react-select-code-option-4"]').click()
            break
          case 'Vandalism':
            cy.get('div[id="react-select-code-option-5"]').click()
            break
          case 'Windscreen':
            cy.get('div[id="react-select-code-option-6"]').click()
            break
          default:
            cy.get('div[id="react-select-code-option-7"]').click()
            break
        }
        cy.get('div[name="datePickerMonthclaim-date-wrapper"]').click().type(`${month}{enter}`)
        cy.get('input[name="datePickerYearclaim-date"]').click().type(`${year}{enter}`)
        cy.get(`input[id*="at_fault-${at_fault}"]`).click()
        cy.get(`input[id*="ncd_lost-${lost_ncd}"]`).click()
        cy.get('button[datacy="add-claim"]').click()
      })
    }
  }

  setNCD(yearsNCD) {
    cy.get('input[id="react-select-ncd-input"]').click({ force: true })
    cy.get(`div[id="react-select-ncd-option-${yearsNCD}"]`).click()
  }

  setDrivingConvictions() {
    cy.get('input[id="has_driving_convictions-No-1"]').click()
  }

  setCriminalConvictions(criminalConvictions) {
    if (criminalConvictions !== 0) {
      cy.get('input[id="has_criminal_conviction-Yes-0"]').click()
    } else {
      cy.get('input[id="has_criminal_conviction-No-1"]').click()
    }
  }
}

export default DriversPage
