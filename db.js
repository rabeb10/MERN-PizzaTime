const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Fonction de connexion à la base de données
const connectDB = async () => {
  try {
    const uri = process.env.URI_MONGODB;
    if (!uri) {
      throw new Error("URI MongoDB non définie dans les variables d'environnement");
    }
    await mongoose.connect(uri);  // Removed useNewUrlParser and useUnifiedTopology options
    console.log('Connexion à MongoDB réussie');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
