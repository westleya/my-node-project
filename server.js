const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const processData = require("./processor");  // import the processing module

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (like index.html) form the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// API endpoint to receive JSON
app.post("/api/submit", (req, res) => {
  const receivedData = req.body;
  console.log("Received data:", receivedData);

  const result = processData(receivedData);

  // Respond back with confirmation
  res.json(result);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});