// lab.js
// Use .js to make JavaScript Loops
// Author: Meg Mocek
// Created: Mar. 10, 2021
// License: Public Domain

//I used Wes' JS bevause I was lost
maxFactors = 4;

outputEl = document.getElementById("output");

//Get the values from the webpage and write them in an object
//This expects to have an output field with ids num0, text0, num1, text1, etc
//Returns an object that looks like this: {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
  var factorObj = {};
  for (var factor = 0; factor<maxFactors; factor++) {
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    console.log(factor + ") num: ", numValue, "text: ", textValue;
    //If either value is blank, don't use it
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}

function outputToPage(str) {
  newEl = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
  
}
