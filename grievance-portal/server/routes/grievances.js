const express = require('express');
const Grievance = require('../models/Grievance');

const router = express.Router();

// Fetch public grievances
router.get('/public', async (req, res) => {
  const grievances = await Grievance.find({ status: 'Public' });
  res.json(grievances);
});

// Fetch resolved grievances
router.get('/resolved', async (req, res) => {
  const grievances = await Grievance.find({ status: 'Resolved' });
  res.json(grievances);
});

module.exports = router;
