const express       = require('express')
const router        = express.Router()

const AuhController = require('/FullStack App/controllers/api/authcontrollers')

router.post('/register', AuhController.register)

module.exports = router