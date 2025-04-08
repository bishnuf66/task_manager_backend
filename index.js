const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");

const authRoutes = require('./routes/AuthRoute');
const taskRoutes = require('./routes/TaskRoutes');

// Middleware
app.use(express.json());
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  };
  app.use(cors(corsOptions));

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
