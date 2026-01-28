const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use("/api", require("./src/routes/productRoutes"));
app.use("/api", require("./src/routes/authRoutes"));
app.use("/api", require("./src/routes/cartRoutes"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("ShoppyGlobe API running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
