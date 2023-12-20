const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Register a new user
router.post('/register', usersController.registerUser);
router.post('/addMockUsers', usersController.addMockUsers);

// User login
router.post('/login', usersController.loginUserWithQR);
//router.post('/loginwithfingerprint', usersController.loginUserWithFingerprint);
router.get('/getByAbhaId/:abhaId', usersController.getUserByAbhaId);

// Update user profile
//router.put('/:userId', usersController.updateUserProfile);

module.exports = router;
