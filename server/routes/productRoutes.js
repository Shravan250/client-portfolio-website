const express = require("express");
const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/productController");
const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get a single product by ID
router.get("/:id", getSingleProduct);

// Create a new product
router.post("/", createProduct);

module.exports = router;
