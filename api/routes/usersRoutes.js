const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Register a new user
router.post('/users/register', usersController.registerUser);

// User login
router.post('/users/login', usersController.loginUser);

// Update user profile
router.put('/users/:userId', usersController.updateUserProfile);

module.exports = router;
