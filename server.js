const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const cors = require('cors');
const taskRoutes = require("./routes/taskRoutes");

const app = express();
// frontend
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://fullstack-tasker-app.vercel.app",
      "http://localhost:5173"
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));



const Port = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// routes
app.use("/", authRoutes)

//task routes
app.use("/api", taskRoutes);

// test Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});




//db
connectDB().then(
    ()=>{app.listen(Port, ()=>{console.log(`✅ Server is running on ${Port}`); });}
);
