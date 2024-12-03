const Cookie = require("../models/miscModel");
// Fonction pour recuperer tous les cookies
exports.findAllCookies = async (req, res) => {
  try {
    const allCookies = await Cookie.find();
    res.status(200).json({ message: "All cookies:", allCookies });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cookies" });
    console.error(err);
  }
};

// Fonction pour ajouter un cookie
exports.createCookie = async (req, res) => {
  try {
    const newCookie = await Cookie.create({ cookies : req.body.cookies });
    res.status(201).json({ message: "Cookie created successfully!", newCookie });
  } catch (err) {
    res.status(500).json({ error: "Failed to create cookie" });
    console.error(err);
  }
};

// Mettre a jour un cookie
// editById fonction mise a jour
exports.editCookieById = async (req, res) => {
  try {
    const editCookie = await Cookie.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ message: "Cookie updated successfully!", editCookie });
  } catch (err) {
    res.status(500).send(err);
  }
};

// removeCookieById fonction de supression
exports.removeCookieById = async (req, res) => {
  try {
    const deleteCookie = await Cookie.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .send({ message: "Cookie is deleted seccessfully", deleteCookie });
  } catch (err) {
    res.status(500).send(err);
  }
};
