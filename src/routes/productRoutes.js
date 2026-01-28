const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

module.exports = router;
