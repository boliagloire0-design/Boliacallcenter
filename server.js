// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Use an environment variable for the frontend URL in production
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
  origin: allowedOrigin
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running on Render!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
