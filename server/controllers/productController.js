const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
};

// Get all products
const getProducts = async (req, res) => {
  const {
    category = "Retrofit Switches",
    sort = "lowToHigh",
    minPrice = 0,
    maxPrice = 10000,
  } = req.query;

  const parsedMinPrice = !isNaN(minPrice) ? parseFloat(minPrice) : 0;
  const parsedMaxPrice = !isNaN(maxPrice) ? parseFloat(maxPrice) : 10000;

  let sortOptions = {};
  let filterOptions = {
    category,
    discountedPrice: { $gte: parsedMinPrice, $lte: parsedMaxPrice },
  };

  switch (sort) {
    case "lowToHigh":
      sortOptions.discountedPrice = 1;
      break;
    case "highToLow":
      sortOptions.discountedPrice = -1;
      break;
    case "newest":
      sortOptions.dateCreated = -1;
      break;
    case "featured":
      filterOptions.isFeatured = true;
      break;
    default:
      sortOptions.discountedPrice = 1;
      break;
  }

  try {
    const products = await Product.find(filterOptions).sort(sortOptions);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

module.exports = { createProduct, getProducts, getSingleProduct };
