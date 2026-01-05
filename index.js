/**
 * Express.js Server Application
 * 
 * A tutorial Node.js server using Express.js framework that serves
 * two GET endpoints returning greeting messages.
 * 
 * Endpoints:
 * - GET /hello   - Returns "Hello world"
 * - GET /evening - Returns "Good evening"
 */

'use strict';

// Import Express.js web framework
const express = require('express');

// Initialize Express application instance
const app = express();

// Configure server port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

/**
 * GET /hello
 * Returns a "Hello world" greeting as plain text
 * 
 * @route GET /hello
 * @returns {string} 200 - "Hello world" plain text response
 */
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /evening
 * Returns a "Good evening" greeting as plain text
 * 
 * @route GET /evening
 * @returns {string} 200 - "Good evening" plain text response
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Start the HTTP server
 * Binds to the configured PORT and logs startup confirmation
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the Express app instance for potential testing or extension
module.exports = app;
