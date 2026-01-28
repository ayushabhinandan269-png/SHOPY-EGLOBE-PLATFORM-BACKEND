const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/cart", auth, async (req, res) => {
  const item = await Cart.create({
    userId: req.userId,
    productId: req.body.productId,
    quantity: req.body.quantity
  });
  res.json(item);
});

router.put("/cart/:id", auth, async (req, res) => {
  const item = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity: req.body.quantity },
    { new: true }
  );
  res.json(item);
});

router.delete("/cart/:id", auth, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
});

module.exports = router;
