// middleware/utils/logger.js
const axios = require("axios");

// Reusable logging function
async function Log(stack, level, pkg, message) {
  try {
    // Send log to test server
    await axios.post("https://20.244.56.144/evaluation-service/logs", {
      stack,
      level,
      package: pkg,
      message
    });
  } catch (err) {
    // Fallback: log to console if remote logging fails
    console.error("Logging failed:", err.message);
  }
}

module.exports = { Log };
