const express = require("express");
const router = express.Router();
const {
  findAllMessages,
  createMessage,
  editMsgById,
  removeMsgById,
} = require("../controllers/msgController");

// Route pour récupérer tous les messages
router.get("/msg", findAllMessages);
// Route pour ajouter un message
router.post("/msg", createMessage);
// Route pour modifier un message
router.put("/updateMsgById/:id", editMsgById);
// Route pour supprimer un message
router.delete("/removeMsg/:id", removeMsgById);
module.exports = router;