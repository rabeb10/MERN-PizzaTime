const express = require('express');
const { registerUser, loginUser } = require('../controllers/usercontrollers');

const router = express.Router();

// Define routes for user authentication
router.post('/register', registerUser); // Route to register a user
router.post('/login', loginUser); // Route for user login

module.exports = router;
