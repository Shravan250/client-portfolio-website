const PDF = require("../models/PDF");

const uploadPDF = async (req, res) => {
  try {
    const { file } = req;

    if (!file) return res.status(400).send("No file uploaded.");

    await PDF.deleteMany({});

    const newPdf = new PDF({
      file: {
        data: file.buffer,
        contentType: file.mimetype,
      },
    });

    await newPdf.save();
    res.status(200).send("PDF uploaded successfully.");
  } catch (err) {
    res.status(500).send("Error uploading PDF.");
  }
};

module.exports = { uploadPDF };
