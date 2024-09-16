const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as needed
const nonTeachingFacultyEmailPattern = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;

// Non-Teaching Faculty login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Non-Teaching Faculty login request received:', { email, password }); // Debugging

  // Check email format
  if (!nonTeachingFacultyEmailPattern.test(email)) {
    console.log('Invalid email format:', email); // Debugging
    return res.status(400).json({ error: 'Invalid non-teaching faculty email format.' });
  }

  try {
    const user = await User.findOne({ email });
    console.log('User retrieved from DB:', user); // Debugging
    
    if (!user) {
      console.log('User not found for email:', email); // Debugging
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password valid:', isPasswordValid); // Debugging

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Non-teaching faculty logged in successfully.' });
  } catch (error) {
    console.error('Error during login:', error); // Debugging
    res.status(500).json({ error: 'Login failed. Please try again later.' });
  }
};

module.exports = { login };
