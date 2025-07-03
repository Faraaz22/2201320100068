const { Log } = require("../utils/logger");

const logMessage = (req, res) => {
  const { stack, level, package: pkg, message } = req.body;
  Log(stack, level, pkg, message);
  res.json({
    logID: Math.random().toString(36).substring(2),
    message: "Log received"
  });
};

module.exports = { logMessage };
