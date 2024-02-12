const moment = require('moment')

module.exports = (service, testName) => {
  // let reference = Cypress.env('reference')
  // reference = reference ? reference.slice(0, 6) : 'unknown'
  return `bm.acceptance_${testName}_${moment().unix()}@gmail.com`
}
