const bcrypt = require('bcrypt');
const User = require('../models/User');
const facultyEmailPattern = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;

// Faculty login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Faculty login request received:', { email, password }); // Debugging

  // Check email format
  if (!facultyEmailPattern.test(email)) {
    console.log('Invalid email format:', email); // Debugging
    return res.status(400).json({ error: 'Invalid faculty email format.' });
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

    res.status(200).json({ message: 'Faculty logged in successfully.' });
  } catch (error) {
    console.error('Error during login:', error); // Debugging
    res.status(500).json({ error: 'Login failed. Please try again later.' });
  }
};

module.exports = { login };
