// server/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/store", require("./routes/store"));
app.use("/search", require("./routes/search"));
app.use("/chat", require("./routes/chat"));
app.use("/create-key", require("./routes/apiKey"));

app.get("/", (req, res) => {
  res.send("🚀 DuperMemory API running with Gemini");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
