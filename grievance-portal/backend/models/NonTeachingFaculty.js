const mongoose = require('mongoose');
const User = require('./User');

const nonTeachingFacultySchema = new mongoose.Schema({
 
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  designation: { type: String }
  
});

const NonTeachingFaculty = mongoose.model('NonTeachingFaculty', nonTeachingFacultySchema);
module.exports = NonTeachingFaculty;

