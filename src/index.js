var alveyjs = require('bitcoinjs-lib')

Object.assign(alveyjs.networks, require('./networks'))

alveyjs.utils = require('./utils')

module.exports = alveyjs