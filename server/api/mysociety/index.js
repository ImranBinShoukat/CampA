/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./mysociety.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.post('/addToMySociety', auth.isAuthenticated(), controller.addToMySociety);

module.exports = router;
