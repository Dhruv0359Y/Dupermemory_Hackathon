// routes/search.js
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { searchMemory } = require("../services/memoryService");

router.post("/", auth, async (req, res) => {
  const { query, user_id } = req.body;

  const results = await searchMemory(query, user_id);

  res.json(results);
});

module.exports = router;
