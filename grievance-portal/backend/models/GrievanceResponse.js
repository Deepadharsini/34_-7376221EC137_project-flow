const mongoose = require('mongoose');

const grievanceResponseSchema = new mongoose.Schema({
  grievance_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Grievance', required: true },
  admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
  response_text: { type: String, required: true },
  response_date: { type: Date, default: Date.now }
});

const GrievanceResponse = mongoose.model('GrievanceResponse', grievanceResponseSchema);
module.exports = GrievanceResponse;
