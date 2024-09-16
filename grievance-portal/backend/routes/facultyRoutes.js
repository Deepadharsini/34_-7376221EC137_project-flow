const express = require('express');
const { login } = require('../controllers/facultyController');
const router = express.Router();

// Faculty login route
router.post('/login', login);

module.exports = router;
