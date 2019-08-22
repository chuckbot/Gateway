'use strict';
const AuthController = require('../controllers').AuthController;
const router = require('express').Router();

router.post('/login', AuthController.authenticate);
router.post('/login-with-token', AuthController.authenticateWithToken);
router.post('/sign-out', AuthController.authorize, AuthController.disavow);

module.exports = router;
