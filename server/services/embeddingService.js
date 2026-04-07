// services/embeddingService.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getEmbedding(text) {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-embedding-001",
  });

  const result = await model.embedContent(text);
  const vector = result.embedding.values;

  // 🔥 ADD THIS LINE
  console.log("Vector Length:", vector.length);
  return result.embedding.values;
}

module.exports = getEmbedding;
