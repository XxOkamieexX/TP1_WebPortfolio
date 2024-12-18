const mongoose = require("mongoose");
const msgSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true},
      lastName: { type: String, required: true},
      email: { type: String, required: true},
      message: { type: String, required: true},
    },
    { timestamps: true}
  );
  module.exports = mongoose.model("Message", msgSchema);