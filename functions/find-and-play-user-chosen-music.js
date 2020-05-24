'use strict'

const { SEARCH_CONFIG } = require('../configurations')

module.exports.findAndPlayUserChosenMusic = async params => {
  const { page } = params

  await page.goto(SEARCH_CONFIG.URL)
  await page.waitFor(5000)
  await page.focus('._2f8ed265fb69fb70c0c9afef329ae0b6-scss')
  await page.keyboard.type(SEARCH_CONFIG.MUSIC_NAME)
  await page.waitFor(3000)
  await page.click('[class~=_11f5fc88e3dec7bfec55f7f49d581d78-scss]')

  return params
}
