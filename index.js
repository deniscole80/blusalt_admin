const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const app = express(); // create express app
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
  if (req.method === 'OPTIONS') {
      return res.sendStatus(201);
  } else {
      return next();
  }
}); 

// add middlewares
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


// start express server on port 5000
app.listen(5000, () => {  
  console.log("server started on port 5000");
});