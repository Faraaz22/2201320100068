const express = require("express");
const PORT = 5000; 
const app = express();


app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});

const { registerUser, getAuthToken } = require("./controllers/userController");
const { logMessage } = require("./controllers/logController");
app.use(express.json());
app.post("/evaluation-service/register", registerUser);
app.post("/evaluation-service/auth", getAuthToken);
app.post("/evaluation-service/logs", logMessage);       
// Middleware to log requests
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`Received ${method} request for ${url}`);
  next();
});
// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(500).json({ error: "Internal Server Error" });
});
// Middleware to handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;


