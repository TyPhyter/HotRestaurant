// Dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 3000;

// Routes
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../www/home.html"));
  });

app.get("/reserve", function(req, res){
    res.sendfile(path.join(__dirname, "../www/reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendfile(path.join(__dirname, "../www/tables.html"));
});

// port listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// show all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});


// Tables array
var tables = [
    {
        name: "",
        phone: "",
        email: "",
        uniqueId: "",
    },
];

var waitList = [
    {
        name: "",
        phone: "",
        email: "",
        uniqueId: "",
    }
]

// add a reservation
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
  
    // newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    if (tables.length>5){
        tables.push(newTable);
    } else waitList.push(newTable);

    res.json(newTable);
  });
  




