const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const smartFilter = require("../utils/smartFilter");
const { storeMemory, searchMemory } = require("../services/memoryService");
const generateResponse = require("../services/llmService");

router.post("/", auth, async (req, res) => {
  try {
    const { message, user_id } = req.body;

    // 🧠 1. Store if important
    const decision = await smartFilter(message);
    if (decision.store) {
      await storeMemory(message, user_id, decision);
    }

    // 🔍 2. Retrieve memory
    const memories = await searchMemory(message, user_id);

    // 🤖 3. Generate response
    const reply = await generateResponse(message, memories);

    res.json({
      reply,
      memory_used: memories.map((m) => m.payload.text),
      stored: decision.store,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
