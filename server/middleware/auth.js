// middleware/auth.js
const apiKeys = require("../data/apiKeys");

function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ error: "No API key" });
  }

  const token = header.split(" ")[1];

  const valid = apiKeys.find(k => k.key === token);

  if (!valid) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  req.developer = valid;
  next();
}

module.exports = auth;