const express = require("express");
const app = express();
const cors = require("cors");
const blogRoutes = require("./app/modules/blog/blog.routes");
const productRoutes = require("./app/modules/product/product.routes");

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Route is working",
  });
});

// routes

app.use("/blog", blogRoutes);
app.use("/product", productRoutes);


module.exports = app;