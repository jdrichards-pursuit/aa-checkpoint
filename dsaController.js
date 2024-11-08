// Instructions:
// Create POST route '/api/analyze-string' that accepts text and returns analysis
// Send 400 if text is missing or empty
// Send 200 with analysis object if valid

// Example Input 1:
// POST body: { "text": "hello world" }
// Response: {
//   "mostFrequentChar": "l"  // appears 3 times
// }
// Status: 200

// Example Input 2:
// POST body: { "text": "Race a car" }
// Response: {
//   "mostFrequentChar": "a"  // appears 2 times, if tie return first one
// }
// Status: 200

// Example Input 3:
// POST body: { "text": "A man a plan a canal Panama" }
// Response: {
//   "mostFrequentChar": "a" // appears 8 times
// }
// Status: 200

const express = require('express');
const router = express.Router();

// Create your POST route here

module.exports = router;