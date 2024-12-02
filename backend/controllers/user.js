const user = require('../services/user');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user.registerUser(email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await user.loginUser(email, password);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
