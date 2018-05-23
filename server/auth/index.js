/**
 * Created by imran on 20/07/2017.
 */
'use strict'

const express = require('express')
const router = express.Router()
const config = require('../config/environment')
const Users = require('../api/user/Users.model')

require('./local/passport').setup(Users, config)

router.use('/local', require('./local'))

module.exports = router
