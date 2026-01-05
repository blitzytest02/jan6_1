/**
 * API Endpoint Tests
 * 
 * Jest test suite for testing the Express.js server endpoints.
 * Uses Supertest for HTTP assertions to verify endpoint responses.
 * 
 * Tests:
 * - GET /hello  - Should return 'Hello world' with status 200
 * - GET /evening - Should return 'Good evening' with status 200
 */

'use strict';

// Import Supertest for HTTP assertion library
const request = require('supertest');

// Import Express application instance from main server file
const app = require('../index.js');

/**
 * API Endpoints Test Suite
 * 
 * Contains unit tests for all API endpoints exposed by the Express server.
 * Each test verifies both the HTTP status code and response body content.
 */
describe('API Endpoints', () => {
  /**
   * Test: GET /hello endpoint
   * 
   * Verifies that the /hello endpoint:
   * - Returns HTTP status code 200 (OK)
   * - Returns exact text 'Hello world' in response body
   */
  test('GET /hello returns Hello world', async () => {
    const response = await request(app)
      .get('/hello')
      .expect('Content-Type', /text/)
      .expect(200);

    expect(response.text).toBe('Hello world');
  });

  /**
   * Test: GET /evening endpoint
   * 
   * Verifies that the /evening endpoint:
   * - Returns HTTP status code 200 (OK)
   * - Returns exact text 'Good evening' in response body
   */
  test('GET /evening returns Good evening', async () => {
    const response = await request(app)
      .get('/evening')
      .expect('Content-Type', /text/)
      .expect(200);

    expect(response.text).toBe('Good evening');
  });

  /**
   * Test: 404 for unknown routes
   * 
   * Verifies that requesting an unknown endpoint:
   * - Returns HTTP status code 404 (Not Found)
   */
  test('GET /unknown returns 404 for unmatched routes', async () => {
    await request(app)
      .get('/unknown')
      .expect(404);
  });
});
