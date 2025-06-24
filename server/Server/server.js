const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// MongoDB Connection (Replace with your Atlas URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kenya-blog')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.get('/api/posts', (req, res) => {
  res.json([{ title: "Western Kenya Farming", content: "Maize harvest tips..." }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
