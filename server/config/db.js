const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected successfully!");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Quitter l'application en cas d'echec
  }
};
module.exports = connectDB;
