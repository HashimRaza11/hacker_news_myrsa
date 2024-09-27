const request = require('supertest');
const express = require('express');
const storyRoutes = require('../routes/storyRoutes');

const app = express();
app.use('/api/stories', storyRoutes);

test('GET /api/stories', async () => {
  const response = await request(app).get('/api/stories?page=1');
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('stories');
  expect(response.body).toHaveProperty('totalPages');
});
