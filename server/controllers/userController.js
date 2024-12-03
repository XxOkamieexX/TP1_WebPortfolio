const User = require("../models/userModel");
// Fonction pour recuperer tous les utilisateurs
exports.findAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().sort([["email", "ascending"]]);
    res.status(200).json({ message: "All users:", allUsers });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
    console.error(err);
  }
};

// Fonction pour ajouter un utilisateur
exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.create({ email, password });
    res.status(201).json({ message: "User created successfully!", newUser });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
    console.error(err);
  }
};

// Mettre a jour un utilisateur
// editById fonction mise a jour
exports.editById = async (req, res) => {
  try {
    const editUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ message: "User updated successfully!", editUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

// removeUserById fonction de supression
exports.removeUserById = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .send({ message: "user is deleted seccessfully", deleteUser });
  } catch (err) {
    res.status(500).send(err);
  }
};
