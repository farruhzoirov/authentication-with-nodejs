const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users');

router.get('/signup', usersController.getSignup);


module.exports = router;