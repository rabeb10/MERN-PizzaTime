const express = require('express');
const pizzaControllers = require('../controllers/pizzacontrollers'); // Ensure correct import

const router = express.Router();

// Use the registerOrder function from pizzaControllers
router.post('/', pizzaControllers.registerOrder); // Register a new order

module.exports = router;
