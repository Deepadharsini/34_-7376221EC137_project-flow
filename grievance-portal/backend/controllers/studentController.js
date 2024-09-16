const bcrypt = require('bcrypt');
const User = require('../models/User');
const studentEmailPattern = /^[a-zA-Z]+\.[a-zA-Z]{2}[0-9]{2}@bitsathy\.ac\.in$/;

// Student login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!studentEmailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid student email format.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Student logged in successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed. Please try again later.' });
  }
};

module.exports = { login };
