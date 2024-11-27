const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  originalPrice: { type: String, required: true },
  discountedPrice: { type: String, required: true },
  imageSrc: [String],
  category: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false },
  desc: String,
  features: [String],
  kitIncludes: [String],
  howItWorks: String,
  legalDisclaimer: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
