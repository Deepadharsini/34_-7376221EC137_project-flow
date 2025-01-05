const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['faculty', 'non-teaching faculty', 'student'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add other fields as necessary
});

module.exports = mongoose.model('User', userSchema);
