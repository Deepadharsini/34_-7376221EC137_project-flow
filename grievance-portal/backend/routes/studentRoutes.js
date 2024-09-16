const express = require('express');
const { login } = require('../controllers/studentController');
const router = express.Router();

// Student login route
router.post('/login', login);

module.exports = router;
