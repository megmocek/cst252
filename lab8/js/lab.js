// lab.js
// Use .js to play with anon functions & callbacks
// Author: Meg Mocek
// Created: Feb. 24, 2021
// License: Public Domain

//Start Wes' Code
function thirdThing(test) {
    console.log(test + ":This is the third thing.<br>")
}

firstThing("TEST 1");
secondThing("TESt 1");
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
