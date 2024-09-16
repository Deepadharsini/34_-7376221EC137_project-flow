const bcrypt = require('bcrypt');
const User = require('../models/User');

const studentEmailPattern = /^[a-zA-Z]+\.[a-zA-Z]{2}[0-9]{2}@bitsathy\.ac\.in$/;
const facultyEmailPattern = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;
const adminEmail = 'admin@bitsathy.ac.in';

// Sign-up controller (for all users)
const signup = async (req, res) => {
  const { email, password } = req.body;

  // Validate email format
  if (!studentEmailPattern.test(email) && !facultyEmailPattern.test(email) && email !== adminEmail) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully.' });
  } catch (error) {
    console.error('Sign-up error:', error);
    res.status(500).json({ error: 'Sign up failed. Please try again later.' });
  }
};

module.exports = { signup };
