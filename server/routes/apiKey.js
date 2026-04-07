// routes/apiKey.js
const express = require("express");
const router = express.Router();

const apiKeys = require("../data/apiKeys");

router.post("/", (req, res) => {
  const newKey = "duper_" + Math.random().toString(36).substring(2, 10);

  apiKeys.push({ key: newKey, name: "New Dev" });

  res.json({ apiKey: newKey });
});

module.exports = router;