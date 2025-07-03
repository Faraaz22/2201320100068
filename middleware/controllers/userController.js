


// axios for http requests
const axios = require("axios");

// register user with test server
async function registerUser(req, res) {
  let { email, name, mobileNo, rollNo, githubUsername } = req.body;
  email = typeof email === 'string' ? email.trim() : '';
  name = typeof name === 'string' ? name.trim() : '';
  mobileNo = typeof mobileNo === 'string' ? mobileNo.trim() : '';
  rollNo = typeof rollNo === 'string' ? rollNo.trim() : '';
  githubUsername = typeof githubUsername === 'string' && githubUsername.trim() ? githubUsername.trim() : `ghuser${Math.floor(Math.random()*100000)}`;
  let accessCode = 'zbkzJF';
  if (!email || !name || !mobileNo || !rollNo) {
    res.status(400).json({ error: 'missing fields' });
    return;
  }
  try {
    // send to test server
    let response = await axios.post(
      "https://20.244.56.144/evaluation-service/register",
      { email, name, mobileNo, rollNo, accessCode, githubUsername },
      { headers: { "Content-Type": "application/json" }, timeout: 5000, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) }
    );
    res.json(response.data);
  } catch (err) {
    let details = err.response && err.response.data ? err.response.data : err.message;
    res.status(500).json({ error: "fail", details });
  }
}

// get auth token from test server
async function getAuthToken(req, res) {
  const { email, name, rollNo, accessCode, clientID, clientSecret } = req.body;
  try {
    let response = await axios.post(
      "https://20.244.56.144/evaluation-service/auth",
      { email, name, rollNo, accessCode, clientID, clientSecret },
      { headers: { "Content-Type": "application/json" }, timeout: 5000, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) }
    );
    res.json(response.data);
  } catch (err) {
    let details = err.response && err.response.data ? err.response.data : err.message;
    res.status(500).json({ error: "fail", details });
  }
}

module.exports = { registerUser, getAuthToken };
