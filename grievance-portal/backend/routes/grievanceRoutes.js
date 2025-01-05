const express = require('express');
const router = express.Router();

// POST route for submitting grievances
router.post('/', (req, res) => {
    const { type, content, isAnonymous } = req.body;

    // Here you can add logic to save the grievance to the database
    console.log('Grievance received:', { type, content, isAnonymous });

    // Respond back to the client
    res.status(201).json({ message: 'Grievance submitted successfully!' });
});

module.exports = router;
