const User = require('../models/User');

async function getAllUsers(req, res) {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users', details: err.message });
  }
}

module.exports = { getAllUsers };
