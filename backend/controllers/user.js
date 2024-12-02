const userService = require('../services/userService');

const registerUser = async (req, res) => {
    try {
      const user = await userService.registerUser(req.body);
      return res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error('Error registering user:', error);
      return res.status(400).json({ message: error.message });
    }
  };

  const loginUser = async (req, res) => {
    try {
      const token = await userService.loginUser(req.body);
      return res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
      console.error('Error logging in user:', error);
      return res.status(401).json({ message: error.message });
    }
  };

module.exports = { registerUser, loginUser };
