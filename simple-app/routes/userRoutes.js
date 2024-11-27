const express = require('express');
const router = express.Router();
const { findAllusers, createUser, editById, removeUserById} =
require('../controllers/userController');

// Route pour récupérer tous les utilisateurs
router.get("/users", findAllUsers);
// Route pour ajouter un utilisateur
router.post("/users", createUser);
// Route pour modifier un utilisateur
router.put("/updateUserById/:id", editById);
// Route pour supprimer un utilisateur
router.delete("/removeUser/:id", removeUserById);
module.exports = router;
