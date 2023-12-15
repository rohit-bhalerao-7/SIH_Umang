const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../../middlewares/authMiddleware');

// Register a new user
router.post('/register', usersController.registerUser);

// User login
router.post('/login', usersController.loginUser);

// Update user profile
router.put('/:userId', authMiddleware, usersController.updateUserProfile);

module.exports = router;
