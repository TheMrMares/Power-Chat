export function isEmailValid(email) {
  return /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(email)
}

export function isZipCodeValid(zipCode) {
  return /(^\d{1,5}$)|(^\d{1,5}-\d{1,4}$)/.test(zipCode)
}
