const express = require("express"); // most widely used framework for node
const app = express(); // common convention to call it is app.
const simpsons = require("./simpsons.json"); // simpsons file
const logging = require("./middleware/logging");
const auth = require("./middleware/auth");
const { response } = require("express");

// to assign IDs to the Simpsons data
simpsons.forEach((char, index) => {
  char.id = index + 1;
});

//handle static file middleware
app.use(express.static("public"));

app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();

  response.send(simpsons);
});

//convert the body to json
app.use(express.json());

//logging middlware
app.use(logging);

//api key validation middleware
// app.use(auth); //only enable if you add a header key

// route middleware
// here you tell express what to listen for (usually you want to listen for specific things)
app.use("/quotes", require("./routes/quotes"));
app.use("/", require("./routes/demo"));

// When setting up a server - start with this bit of code.
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// The above bit of code will tell you what port you want to listen on
// Imp bit is process.env.PORT
// What it means is if there is a process environment variable call port if not use port 6001. If you have a port use it if not use this one
// Environment variable is the best way to do it
