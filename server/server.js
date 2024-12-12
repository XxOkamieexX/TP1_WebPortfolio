require("dotenv").config();

const express = require("express");
// Configurer le middleware CORS
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Importer les routes
const userRoutes = require("./routes/userRoutes");
const msgRoutes = require("./routes/msgRoutes");
const miscRoutes = require("./routes/miscRoutes");

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

// Initialisation de l'application
const app = express();

//Ajouter le middleware
app.use(cors()); // Ajouter le middleware CORS
app.use(express.json()); // Ajouter le middleware JSON

// Exemple d'endpoint API
app.get("/api/misc", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Définir les routes | Routes API
app.use("/api", userRoutes);
app.use("/api", msgRoutes);
app.use("/api", miscRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
  console.log("Server running on ${PORT}");
});
