'use strict'

const puppeteer = require('puppeteer')
const { LAUNCH_CONFIG } = require('../configurations')

module.exports.launchSpotify = async () => {
  const browser = await puppeteer.launch({
    headless: LAUNCH_CONFIG.HEADLESS,
    executablePath: LAUNCH_CONFIG.GOOGLE_EXEC_PATH
   })

  const page = await browser.newPage()
  await page.setViewport(LAUNCH_CONFIG.VIEWPORT)
  await page.goto(LAUNCH_CONFIG.URL)

  return { page, browser }
}
