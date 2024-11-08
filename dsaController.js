
 
  // Create POST route '/api/frequent-char' that:
  // 1. Accepts: { text: string }
  // 2. Uses findMostFrequent() function you solved earlieron the input from the post request
  // 3. Returns: { mostFrequent: "the character" }
  // 4. Send 400 if text is missing/empty
  // 5. Send 200 if valid
  
  const express = require('express');
  const router = express.Router();
  
  // Create your POST route here
  // Hint: Use findMostFrequent(req.body.text)
  
  module.exports = router;