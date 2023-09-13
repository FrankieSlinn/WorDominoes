const express = require ('express')

const Minimum = require('../models/minimum')

//Instantiate a Router
const router = express.Router()

//Export the Router so we can use it in the 'server.js' file
module.exports = router