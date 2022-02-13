var express = require("express");
var path = require('path');
require('dotenv').config();


var PORT = process.env.PORT || 8080;

var app = express();



// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "about.html"));
    });

app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "calendar.html"));
    });

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "contact.html"));
    });
app.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "gallery.html"));
    });

app.get("/api", function(req, res) {

  exports.envVar = (req, res) => {

    var apiKey = process.env.apiKey;
    var apiSecret = process.env.apiSecret;
    var apiObj = {apiKey, apiSecret};
    res.status("200").json(apiObj);
    console.log(apiObj, "this ya know")
  };


});

app.post("/form", function(req, res){

  //turned off to not recieve messages until deployed
  var sendmail = require('sendmail')();
  sendmail({
      from: req.body.userEmail,
      to: 'charleescomfortkitchen@gmail.com',
      subject: req.body.userSubject,
      html: req.body.userText,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
});
app.post("/subscribe", function(req, res){

  //turned off to not recieve messages until deployed
  var sendmail = require('sendmail')();
  sendmail({
      from: 'josh.jenkin@live.com',
      to: 'charleescomfortkitchen@gmail.com',
      subject: 'New Subscriber Email',
      html: req.body.both,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  //Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});