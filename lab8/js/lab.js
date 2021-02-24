// lab.js
// Use .js to play with anon functions & callbacks
// Author: Meg Mocek
// Created: Feb. 24, 2021
// License: Public Domain

function(main) {
  outputElement = document.getElementById("js-output");
  outputElement.innerHTML = "Jankies";
}

function firstThing(test) {
    console.log(test + ":This is the first thing.<br>")
function secondThing(test) {
        console.log(test + ":This is the second thing.<br>")
function thirdThing(test) {
    console.log(test + ":This is the third thing.<br>")
}

//Start Wes' Code
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Test 2 in order
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//Test 3 - order in 3, 2, 1
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
//End Wes' Code
