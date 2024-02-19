//Random Value inc numbers and special characters
export function generateRandomValue(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-/=?^_`{}|'
  let randomValue = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomValue += characters.charAt(randomIndex)
  }
  return randomValue
}

//Random Value - Alphabetical
export function generateAlphabeticalRandomValue(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let randomValue = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomValue += characters.charAt(randomIndex)
  }
  return randomValue
}

//Random Value - Numerical
export function generateNumericalRandomValue(length) {
  const characters = '0123456789'
  let randomValue = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomValue += characters.charAt(randomIndex)
  }
  return randomValue
}
