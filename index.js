const express = require('express');
const app = express();
const cors = require("cors");
const authRoutes= require('./routes/AuthRoute')
const taskRoutes = require('./routes/TaskRoutes')


app.use(express.json());

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);

const port =process.env.PORT || 8000;
app.use([authRoutes])
app.use("/api/v1", taskRoutes);  // Use task routes


app.listen(port, (err) => {
    if (err) {
        console.log("Server not started");
    }
    else {
        console.log(`Server is running on port ${port}`);
    }
});