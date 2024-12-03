const express = require("express");
const router = express.Router();
const {
  findAllCookies,
  createCookie,
  editCookieById,
  removeCookieById,
} = require("../controllers/miscController");

// Route pour récupérer tous les messages
router.get("/misc", findAllCookies);
// Route pour ajouter un message
router.post("/misc", createCookie);
// Route pour modifier un message
router.put("/updateMiscById/:id", editCookieById);
// Route pour supprimer un message
router.delete("/removeMisc/:id", removeCookieById);
module.exports = router;