const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connection = require("./db");
const roomRoutes = require("./routes/room");
const BookingRoutes = require("./routes/book")

require("dotenv").config();

const port = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// Database Connection
connection();

// Routes

app.use("/api/room", roomRoutes);
app.use("/api/book", BookingRoutes);
