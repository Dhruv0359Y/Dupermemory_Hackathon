// config/gemini.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Chat model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

module.exports = model;
