/**
 * Created by imran on 21/01/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./university.controller');

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.getOneUniversity);
router.post('/add', controller.addUniveristy);
router.post('/update', auth.isAuthenticated(), controller.updateUniveristy);
router.delete('/delete', auth.isAuthenticated(), controller.deleteUniveristy);

module.exports = router;
