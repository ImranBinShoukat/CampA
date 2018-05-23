/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./pages.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.get('/connectedPages/:id', auth.isAuthenticated(), controller.getConnectedPages);
router.post('/changeStatus', auth.isAuthenticated(), controller.changeStatus);

module.exports = router;
