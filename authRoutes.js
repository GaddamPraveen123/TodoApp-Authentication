const express = require('express');
const { signUp, signIn } = require('./authController');
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
