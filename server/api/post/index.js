/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./post.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.post('/create', auth.isAuthenticated(), controller.createPost);
router.get('/myPosts/:id', auth.isAuthenticated(), controller.getMyPosts);
router.post('/uploadFile', auth.isAuthenticated(), controller.upload);

module.exports = router;
