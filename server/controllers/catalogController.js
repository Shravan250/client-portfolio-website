const PDF = require("../models/PDF");

const downloadPDF = async (req, res) => {
  try {
    const pdf = await PDF.findOne();

    if (!pdf) return res.status(404).send("No PDF found.");

    res.set({
      "Content-Type": pdf.file.contentType,
      "Content-Disposition": 'attachment; filename="file.pdf"',
    });
    res.send(pdf.file.data);
  } catch (err) {
    res.status(500).send("Error downloading PDF.");
  }
};

module.exports = { downloadPDF };
