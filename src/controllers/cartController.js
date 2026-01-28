const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const item = await Cart.create({
    userId: req.userId,
    productId: req.body.productId,
    quantity: req.body.quantity
  });
  res.json(item);
};

exports.updateCartItem = async (req, res) => {
  const item = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity: req.body.quantity },
    { new: true }
  );
  res.json(item);
};

exports.deleteCartItem = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
};
