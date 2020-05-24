'use strict'

const { findAndPlayUserChosenMusic } = require('./find-and-play-user-chosen-music')
const { launchSpotify } = require('./launch-spotify')
const { setUserAuth } = require('./set-user-auth')

module.exports = {
  findAndPlayUserChosenMusic,
  launchSpotify,
  setUserAuth
}
