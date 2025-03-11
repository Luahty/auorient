const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Cấu hình middleware
app.use(cors());
app.use(bodyParser.json());

// Định tuyến API
app.use("/api/users", userRoutes);

module.exports = app;
