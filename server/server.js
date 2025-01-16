const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.use((req, res) => res.status(404).json({ message: "Endpoint not found" }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
