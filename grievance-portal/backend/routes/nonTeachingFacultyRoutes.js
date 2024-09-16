const express = require('express');
const { login } = require('../controllers/nonTeachingFacultyController'); // Adjust the path as needed
const router = express.Router();

// Non-Teaching Faculty login route
router.post('/login', login);

module.exports = router;
