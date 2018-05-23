/**
 * Created by imran on 20/01/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./user.controller');

router.get('/getAllUsers', auth.isAuthenticated(), controller.index);
router.get('/', auth.isAuthenticated(), controller.getOneUser);
router.post('/add', controller.addUser);
router.post('/update', auth.isAuthenticated(), controller.updateUser);
router.delete('/delete', auth.isAuthenticated(), controller.deleteUser);
router.post('/makeOfficeBearer', auth.isAuthenticated(), controller.makeOfficeBearer);
router.post('/changePic', auth.isAuthenticated(), controller.changePic);
router.post('/checkUsername', auth.isAuthenticated(), controller.checkUsername);

module.exports = router;
