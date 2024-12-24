const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  phone: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);
