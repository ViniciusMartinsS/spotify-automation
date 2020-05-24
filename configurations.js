'use strict'

const MUSIC_NAME = process.env.MUSIC_NAME
const USERNAME = process.env.SPOTIFY_USERNAME
const PASSWORD = process.env.SPOTIFY_PASSWORD
const GOOGLE_EXEC_PATH = process.env.GOOGLE_EXEC_PATH

module.exports.LAUNCH_CONFIG = {
  GOOGLE_EXEC_PATH,
  HEADLESS: false,
  URL: 'https://accounts.spotify.com/en/login?continue=https:%2F%2Fopen.spotify.com%2F',
  VIEWPORT: { width: 1366, height: 768 }
}

module.exports.SEARCH_CONFIG = {
  URL: 'https://open.spotify.com/search',
  MUSIC_NAME
}

module.exports.AUTH_CONFIG = {
  USERNAME,
  PASSWORD
}
