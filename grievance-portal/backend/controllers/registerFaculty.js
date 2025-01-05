const bcrypt = require('bcrypt');
const User = require('../models/User');

// Faculty registration controller
const registerFaculty = async (req, res) => {
  const { email, password } = req.body;
  console.log('Faculty registration request received:', { email, password }); // Debugging

  // Validate email and password
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password + process.env.PEPPER, parseInt(process.env.SALT_ROUNDS));

    // Create a new faculty user
    const newUser = new User({
      email,
      password: hashedPassword,
      role: 'faculty',
    });

    await newUser.save();
    console.log(`Faculty registered with ID: ${newUser._id}`);

    res.status(201).json({ message: 'Faculty registered successfully.' });
  } catch (error) {
    console.error('Faculty registration error:', error); // Debugging
    res.status(500).json({ error: 'Registration failed. Please try again later.' });
  }
};

module.exports = { registerFaculty };
