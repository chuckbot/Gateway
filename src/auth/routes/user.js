'use strict';
const AuthController = require('../controllers').AuthController;
const UserController = require('../controllers').UserController;
const router = require('express').Router();

router.post('/', UserController.create);
router.get('/', AuthController.authorize, UserController.getById);

module.exports = router;
