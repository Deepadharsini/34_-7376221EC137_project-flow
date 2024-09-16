const adminEmail = 'admin@bitsathy.ac.in';

// Admin login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  if (email !== adminEmail || password !== 'Admin001') {
    return res.status(400).json({ error: 'Invalid admin email or password' });
  }

  res.status(200).json({ message: 'Admin logged in successfully.' });
};

module.exports = { login };
