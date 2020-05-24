'use strict'

const { config } = require('dotenv')
config()

const {
  findAndPlayUserChosenMusic,
  launchSpotify,
  setUserAuth
 } = require('./functions')

function main () {
  launchSpotify()
    .then(params => setUserAuth(params))
    .then(params => findAndPlayUserChosenMusic(params))
    .catch(err => {
      console.log('An error has occurred', err)
      return err
    })
}

main()
