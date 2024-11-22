const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// Charger les variables d'environnement
dotenv.config();
// Connexion à la base de données
connectDB();
// Initialisation de l'application
const app = express();
// Middleware pour parser les requêtes JSON
app.use(express.json());
// Définir les routes
app.use("/api", userRoutes);
// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:${PORT}");
});
