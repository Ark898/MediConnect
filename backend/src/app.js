const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes'); // Example route
app.use('/api/users', userRoutes);

module.exports = app;
