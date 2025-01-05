const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String },
  anonymity: { type: Boolean, required: true },
  status: { type: String, default: 'Pending' },
  submission_date: { type: Date, default: Date.now },
  submitted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  is_anonymous: { type: Boolean, required: true }
});

const Grievance = mongoose.model('Grievance', grievanceSchema);
module.exports = Grievance;
