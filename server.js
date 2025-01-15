const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Use require for custom modules
const pizzaRoutes = require('./routes/PizzaRoutes'); // Use require for custom routes
const userRoutes = require('./routes/userRoutes'); // Use require for custom routes
const cors = require('cors');

dotenv.config();
const app = express(); // Initialize Express

// Add CORS middleware
app.use(cors()); // Enable cross-origin requests

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenue sur PizzaTime');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
