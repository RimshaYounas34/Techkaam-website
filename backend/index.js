const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-domain.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));

app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("TeachKaam Backend is Running 🚀");
});

// PORT
const PORT = process.env.PORT || 5000;

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    // routes
    app.use("/api/contact", require("./routes/contactRoutes"));
    app.use("/api/admin", require("./routes/adminRoutes"));

    // server start
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });

  })
  .catch((err) => {
    console.log("Mongo Error:", err.message);
  });