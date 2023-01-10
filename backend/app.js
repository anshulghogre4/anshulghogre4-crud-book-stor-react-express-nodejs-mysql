require("dotenv").config();
const db = require("./config/db")
const express = require("express");
const app = express();
const cors = require("cors");
const booksRoutes = require("./routes/booksRoutes.js")
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", booksRoutes,userRoutes);
app.use(cors());

module.exports =app;


