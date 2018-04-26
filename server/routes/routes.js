var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 3000;

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../www/index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendfile(path.join(__dirname, "../www/reservation.html"));
});

app.get("/tables", function (req, res) {
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


var tables = [
    {
        name: "",
        phone: "",
        email: "",
        uniqueId: "",
    },
];




