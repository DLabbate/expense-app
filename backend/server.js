// Express
const express = require("express");
const app = express();

// CORS
var cors = require("cors");

// Environment variables
const port = process.env.PORT || 3000;

// Use JSON
app.use(express.json());

// Use cors
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).json({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});