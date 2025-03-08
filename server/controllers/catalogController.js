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

// const PDF = require("../models/PDF");

// const downloadPDF = async (req, res) => {
//   try {
//     const pdf = await PDF.findOne();

//     if (!pdf) return res.status(404).json({ message: "No PDF found." });

//     console.log("PDF File Object:", pdf.file);
//     res.json({ file: pdf.file });
//   } catch (err) {
//     res.status(500).json({ message: "Error downloading PDF." });
//   }
// };

module.exports = { downloadPDF };
