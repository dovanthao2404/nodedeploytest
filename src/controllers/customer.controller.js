const express = require('express')
const { customerPost, customerGet } = require('../services/customer.service')
const { customerPostMiddleware } = require('../middleware/customer.middelware')
const routerCustomer = express.Router()

// define the home page route
routerCustomer.get('/', customerGet)

routerCustomer.post('/', customerPostMiddleware, customerPost)

module.exports = routerCustomer