const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS (safe production config)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://techkaam-website.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ FIX: remove app.options("*") completely
// (NOT needed if cors middleware is used properly)

// middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    // routes
    app.use("/api/contact", require("./routes/contactRoutes"));
    app.use("/api/admin", require("./routes/adminRoutes"));

    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch(err => console.log("Mongo Error:", err.message));