const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const msgRoutes = require("./routes/msgRoutes");
const miscRoutes = require("./routes/miscRoutes");

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

// Initialisation de l'application
const app = express();
app.use(express.json());

// Définir les routes | Routes API
app.use("/api", userRoutes);
app.use("/api", msgRoutes);
app.use("/api", miscRoutes);

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Démarrer le serveur
const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:${PORT}");
});
