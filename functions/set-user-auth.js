'use strict'

const { AUTH_CONFIG } = require('../configurations')

module.exports.setUserAuth = async params => {
  const { page } = params

  await page.focus('#login-username')
  await page.keyboard.type(AUTH_CONFIG.USERNAME)
  await page.focus('#login-password')
  await page.keyboard.type(AUTH_CONFIG.PASSWORD)
  await page.click('#login-button')
  await page.waitFor(5000)

  return params
}
