const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  file: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("PDF", pdfSchema);
