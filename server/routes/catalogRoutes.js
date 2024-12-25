const express = require("express");
const multer = require("multer");
const {
  uploadCatalog,
  downloadCatalog,
} = require("../controllers/catalogController");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); // Save to uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Add a unique timestamp
  },
});

const upload = multer({ storage });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "./uploads"),
//   filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
// });

// const upload = multer({ storage });

router.post("/upload", upload.single("catalog"), uploadCatalog);
router.get("/download", downloadCatalog);

module.exports = router;
