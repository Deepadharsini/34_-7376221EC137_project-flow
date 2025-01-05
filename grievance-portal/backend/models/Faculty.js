const mongoose = require('mongoose');
const User = require('./User');

const facultySchema = new mongoose.Schema({
  
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  department: { type: String }
});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
