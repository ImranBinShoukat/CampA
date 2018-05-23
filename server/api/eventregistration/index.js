/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./eventregistration.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.post('/add', auth.isAuthenticated(), controller.registerEvent);
router.get('/myEvents/:id', auth.isAuthenticated(), controller.getMyEvents);
router.post('/cancel', auth.isAuthenticated(), controller.cancelRegistration);

module.exports = router;
