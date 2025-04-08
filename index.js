const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/AuthRoute');
const taskRoutes = require('./routes/TaskRoutes');

// Middleware
app.use(express.json());

// 🔧 CORS setup
const allowedOrigins = [
    process.env.FRONTEND_URL,
 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin); // allow request
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // allow cookies & auth headers
}));

// Routes
app.use(authRoutes);
app.use("/api/v1", taskRoutes);

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.log("Server not started");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
