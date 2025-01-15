const Order = require('../models/pizza'); // Corrected path


// Enregistrer une nouvelle commande
exports.registerOrder = async (req, res) => {
  const { method, size, crust, QTY, toppings } = req.body;

  try {
    validateOrder([method, QTY, size, crust, toppings]);
    const newOrder = new Order({ method, size, crust, QTY, toppings });
    await newOrder.save();
    res.status(201).json({ message: 'Félicitations! Vous avez créé votre commande.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

function validateOrder(fields) {
  for (const field of fields) {
    if (!field) {
      throw new Error('Tous les champs sont nécessaires.');
    }
  }
}
