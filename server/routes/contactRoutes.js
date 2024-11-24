const express = require("express");
const { storeContactInfo } = require("../controllers/contactController");
const router = express.Router();

router.post("/submit", storeContactInfo);

module.exports = router;
