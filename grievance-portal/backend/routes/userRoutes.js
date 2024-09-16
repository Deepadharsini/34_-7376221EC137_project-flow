const express = require('express');
const { signup } = require('../controllers/userController');
const router = express.Router();

// Unified sign-up route for all roles
router.post('/signup', signup);

module.exports = router;
