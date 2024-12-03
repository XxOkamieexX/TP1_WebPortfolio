const mongoose = require("mongoose");
const miscSchema = new mongoose.Schema(
    {
      cookies: { type: Boolean, required: false},
    },
    { timestamps: true}
  );
  module.exports = mongoose.model("Misc", miscSchema);