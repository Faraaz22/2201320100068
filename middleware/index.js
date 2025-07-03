
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const { registerUser, getAuthToken } = require("./controllers/userController")
const { logMessage } = require("./controllers/logController")
app.post("/evaluation-service/register", registerUser)
app.post("/evaluation-service/auth", getAuthToken)
app.post("/evaluation-service/logs", logMessage)
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" })
})
app.listen(5000)


