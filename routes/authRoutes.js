const express = require('express');
const AuthControllers = require('../controllers/AuthControllers');
const router = express.Router();

router.post('/register', AuthControllers.registerUser)
router.post('/login', AuthControllers.loginUser)

module.exports = router