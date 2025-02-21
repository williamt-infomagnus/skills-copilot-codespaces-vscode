// Create web server
// Create a route to handle GET requests to /comments
// Read comments.json file
// Send the comments to the client as a JSON response
// Start the server on port 3000
// Use the comments.json file to test the route

var express = require("express");
var fs = require("fs");
var app = express();

app.get("/comments", function (req, res) {
  fs.readFile("./comments.json", "utf8", function (err, data) {
    if (err) {
      res.status(500).send("An error occurred: " + err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});