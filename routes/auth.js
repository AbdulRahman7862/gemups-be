const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/auth/signupController');
const { login } = require('../controllers/auth/loginController');
const { getUserBalance } = require('../controllers/auth/userController');
const { authenticate } = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user/balance', authenticate, getUserBalance);


module.exports = router; 