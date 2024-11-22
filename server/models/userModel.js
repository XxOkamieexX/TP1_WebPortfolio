const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
); // Ajoute createAt et updatedAt

module.exports = mongoose.model("User", userSchema);
