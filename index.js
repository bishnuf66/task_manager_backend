const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/AuthRoute');
const taskRoutes = require('./routes/TaskRoutes');

// Middleware
app.use(express.json());


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
