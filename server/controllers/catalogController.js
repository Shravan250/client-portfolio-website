const Catalog = require("../models/catalogModel");
const fs = require("fs");
const path = require("path");

exports.uploadCatalog = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      console.error("No file uploaded.");
      return res.status(400).send("No file uploaded.");
    }

    console.log("Uploaded file:", file);

    const uploadsDir = path.join(__dirname, "../uploads");

    fs.readdir(uploadsDir, (err, files) => {
      if (err) throw err;

      files.forEach((f) => {
        fs.unlinkSync(path.join(uploadsDir, f));
      });
    });

    await Catalog.deleteMany({});
    const newCatalog = new Catalog({ filename: file.filename });
    await newCatalog.save();

    res.status(201).send("Catalog uploaded successfully.");
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).send("Error uploading catalog.");
  }
};

exports.downloadCatalog = async (req, res) => {
  try {
    const catalog = await Catalog.findOne();
    if (!catalog) return res.status(404).send("Catalog not found.");

    const filePath = path.resolve(__dirname, "../uploads", catalog.filename);
    console.log("Downloading file from path:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("File not found on server:", filePath);
      return res.status(404).send("File not found on server.");
    }

    res.download(filePath);
  } catch (error) {
    console.error("Download Error:", error);
    res.status(500).send("Error downloading catalog.");
  }
};
