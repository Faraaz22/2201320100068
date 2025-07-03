
function logMessage(req, res) {
  res.json({
    logID: Math.random().toString(36).substring(2),
    message: "Log received"
  })
}

module.exports = { logMessage }
