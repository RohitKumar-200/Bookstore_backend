const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.get("/", (req, res) => res.send("Hello Bookstore"));

//PORT
const port = process.env.PORT || 4000;

//Starting a server
app.listen(port, console.log(`Server is running at port ${port}`));
