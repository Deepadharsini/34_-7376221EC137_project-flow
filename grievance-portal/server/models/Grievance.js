const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
  description: String,
  status: { type: String, enum: ['Public', 'Resolved'], default: 'Public' }
});

const Grievance = mongoose.model('Grievance', grievanceSchema);

module.exports = Grievance;
