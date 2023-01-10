require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const booksRoutes = require("./routes/booksRoutes.js")
const userRoutes = require("./routes/userRoutes")



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", booksRoutes,userRoutes);


module.exports =app;


