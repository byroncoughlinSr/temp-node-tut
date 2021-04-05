//CommonJS, every file is module(by default)
//Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-minegrenade')
sayHi('susan')
sayHi(names.byron)
sayHi(names.peter) 