// lab.js
// Use .js to make Job-Oriented Design
// Author: Meg Mocek
// Created: Mar. 24, 2021
// License: Public Domain

//I hope I did this right because I tried to follow along with Wes in class.

class Vehicle{
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    thiss.extras = extras;
    this.name = name;
  }
  info() {
    this.info = function() {
      return this.color + " " + this.year + " " + this.make + " " + this.model +
      " with " + this.extras + " called " + this.name;
    }
}

var vehicles = []

vehicles.push(new Vehicle("Honda", "Civic", 2008, "silver", "Meg's Ride", "car"));
vehicles.push(new Vehicle("Chevy", "Malibu", 2012, "blue/grey", "stained seats", "Mom's Ride"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendchild(newEl);
}
