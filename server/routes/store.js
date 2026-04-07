// routes/store.js
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const smartFilter = require("../utils/smartFilter");
const { storeMemory } = require("../services/memoryService");

router.post("/", auth, async (req, res) => {
  const { text, user_id } = req.body;

  const decision = smartFilter(text);

  if (!decision.store) {
    return res.json({ message: "Ignored " });
  }

  await storeMemory(text, user_id, decision);

  res.json({ message: "Stored " });
});

module.exports = router;
