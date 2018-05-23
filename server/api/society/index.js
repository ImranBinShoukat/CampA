/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./society.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.post('/add', auth.isAuthenticated(), controller.addSociety);
router.post('/update', auth.isAuthenticated(), controller.updateSociety);
router.delete('/delete', auth.isAuthenticated(), controller.deleteSociety);

module.exports = router;
