const express = require("express");
const { downloadPDF } = require("../controllers/catalogController");

const router = express.Router();

router.get("/download", downloadPDF);

module.exports = router;
