// lab.js
// Use .js to play with arrays and objects
// Author: Meg Mocek
// Created: Feb. 15, 2021
// License: Public Domain

// Define variables
myTransport = ["Honda Civic", "Blade Scooter", "my feet"];

myMainRide = {
  make: "Honda",
  model: "Civic",
  year: 2008,
  color: "Silver",
  extras: "Harley Quinn sticker", "Deadpool sticker", "Deadpool license plate cover"
}

// OutPut
document.writeln("My Transportation:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
        JSON.stringify(myMainRide, null, '\t'), "</pre>");
//The above was taken from Wes' assigment intructions.
