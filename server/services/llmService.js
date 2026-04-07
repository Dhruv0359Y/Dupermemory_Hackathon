// services/llmService.js

const model = require("../config/gemini");

async function generateResponse(message, memories) {
  try {
    // 🧠 Step 1: Clean & rank memories (basic relevance feel)
    const formattedMemories = (memories || [])
      .filter((m) => m?.payload?.text)
      .slice(0, 5) // limit top 5 (like vector search)
      .map((m, i) => `(${i + 1}) ${m.payload.text}`)
      .join("\n");

    const memoryContext = formattedMemories || "No relevant memory found.";

    // 🧠 Step 2: Strong system-style instruction (ZIP style)
    const prompt = `
You are an advanced AI assistant with long-term memory capabilities.

Your job is to generate highly personalized, context-aware responses.

========================
MEMORY CONTEXT:
${memoryContext}
========================

INSTRUCTIONS:
- Carefully analyze the MEMORY CONTEXT.
- If memory is relevant → use it naturally in your answer.
- If memory is not relevant → ignore it completely.
- NEVER explicitly say "based on memory" or "from memory".
- Keep response natural, helpful, and human-like.
- Prioritize user intent over memory noise.

USER QUERY:
${message}

RESPONSE:
`;

    // 🤖 Step 3: LLM Call
    const result = await model.generateContent(prompt);

    const text = result?.response?.text?.() || "";

    // 🧠 Step 4: Safety fallback (ZIP-like robustness)
    if (!text || text.trim().length === 0) {
      return "I'm not sure, but I can help you with that. Could you clarify?";
    }

    return text.trim();
  } catch (err) {
    console.error("❌ LLM Error:", err.message);

    // 🔥 Graceful fallback
    return "Something went wrong while generating response. Please try again.";
  }
}

module.exports = generateResponse;
