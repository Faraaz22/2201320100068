const axios = require("axios");

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      "https://20.244.56.144/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      { headers: { "Content-Type": "application/json" }, timeout: 5000, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) }
    );
  } catch (err) {
 
  }
}

module.exports = { Log }
