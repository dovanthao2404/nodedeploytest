const express = require('express')
const { customerPost, customerGet } = require('../services/customer.service')
const { customerPostMiddleware } = require('../middleware/customer.middelware')
const routerCustomer = express.Router()
const multer = require('multer')
const { uploadImageSingle } = require('../middleware/upload')
// define the home page route
routerCustomer.get('/', customerGet)

const upload = multer()

routerCustomer.post('/', uploadImageSingle().single('avatar'), customerPost)



module.exports = routerCustomer