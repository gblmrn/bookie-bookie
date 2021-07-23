const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// create express app
const app = express();
app.use(cors());

// Setup server port
const port = process.env.PORT || 5000;

// parse request of content-type - applicatoin/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require user routes
const userRoutes = require("./src/routes/user.routes");
const bookRoutes = require("./src/routes/book.routes");

// using as middleware
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

// auth server api
app.get("/api/auth/login", (req, res) => {
  res.send("Auth api is working")
});

// auth server api
app.get("/api/auth/register", (req, res) => {
  res.send("Register api is working")
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
