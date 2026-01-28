const Product = require("../models/Product");

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET PRODUCT BY ID
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(product);
};
// ADD PRODUCT (Sample / Testing)
exports.createProduct = async (req, res) => {
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock
  });

  res.status(201).json(product);
};
