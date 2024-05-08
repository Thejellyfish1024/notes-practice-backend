const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Route is working",
  });
});

// routes

app.use("/blog", blog)


module.exports = app;