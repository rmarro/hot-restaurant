var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var Reservation = require("./reservation.js")

var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


var tablesArray = [];
var waitlistArray = [];

function makeReservation() {
    // whatever user enters into form will be the parameters for new Reservation
    var newReservation = new Reservation( // add form input here 
    );
    // add new reservation object to tables, or waitlist if tables are full
    if (tablesArray.length < 5) {
        tablesArray.push(newReservation);
    } else {
        waitlistArray.push(newReservation);
    }
};