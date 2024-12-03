const Msg = require("../models/msgModel");
// Fonction pour recuperer tous les messages
exports.findAllMessages = async (req, res) => {
  try {
    const allMsg = await Msg.find().sort([["firstName", "ascending"]]);
    res.status(200).json({ message: "All messages:", allMsg});
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
    console.error(err);
  }
};

// Fonction pour ajouter un message
exports.createMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    const newMsg= await Msg.create({ firstName, lastName, email, message });
    res.status(201).json({ message: "Message created successfully!", newMsg });
  } catch (err) {
    res.status(500).json({ error: "Failed to create message" });
    console.error(err);
  }
};

// Mettre a jour un message
// editById fonction mise a jour
exports.editMsgById = async (req, res) => {
  try {
    const editMsg = await Msg.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ message: "Message updated successfully!", editMsg });
  } catch (err) {
    res.status(500).send(err);
  }
};

// removeMsgById fonction de supression
exports.removeMsgById = async (req, res) => {
  try {
    const deleteMsg = await Msg.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .send({ message: "Message is deleted seccessfully", deleteMsg });
  } catch (err) {
    res.status(500).send(err);
  }
};