/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./events.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.post('/add', auth.isAuthenticated(), controller.addEvent);
router.post('/update', auth.isAuthenticated(), controller.updateEvent);
router.post('/changeStatus', auth.isAuthenticated(), controller.changeStatus);
router.delete('/delete/:id', auth.isAuthenticated(), controller.deleteEvent);

module.exports = router;
