require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

app.get("/secret", (req, res) => {
  res.status(200).json({
    success: true,
    message: "This secret is coming from a shared .env file (bad practice)",
    API_KEY,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
