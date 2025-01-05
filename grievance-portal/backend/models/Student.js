const mongoose = require('mongoose');
const User = require('./User');

const studentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  student_number: { type: String }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
