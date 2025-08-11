const express = require('express');
const { getAllUsers } = require('../controllers/userController');

const router = express.Router();

// GET /users → Returns all users
router.get('/users', getAllUsers);

module.exports = router;
