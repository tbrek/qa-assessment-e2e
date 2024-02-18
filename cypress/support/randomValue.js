//Random Value inc numbers and special characters
Cypress.Commands.add('generateRandomValue', (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-/=?^_`{}|'
  let randomValue = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomValue += characters.charAt(randomIndex)
  }
  return randomValue;
})

//Random Value - Alphabetical
Cypress.Commands.add('generateAlphabeticalRandomValue', (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let randomValue = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomValue += characters.charAt(randomIndex)
  }
  return randomValue
})

//Random Value - Numerical
Cypress.Commands.add('generateNumericalRandomValue', (length) => {
  const characters = '0123456789'
  let randomValue = ''
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomValue += characters.charAt(randomIndex)
  }
  return randomValue
})