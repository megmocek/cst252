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
//Returns an object that looks like this:
//        {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
  var factorObj = {};
  for (var factor = 0; factor<maxFactors; factor++) {
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    console.log(factor + ") num: ", numValue, "text: ", textValue);
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

//Given a number and an object  that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
//Loops over the numbers and outputs the number and the marching text
//For factors
function fizzBuzzBoom(maxNums, factorObj) {
  //Iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    //Reset output string
    var outputStr = "";
    //Iterate over the factors we got from the HTML
    for (var factor in factorObj) {
      //Check to see if this num is a multiple of factor
      if (num % factor == 0) {
        //If yes, then add the text to output string
        outputStr += factorObj[factor];
      }
    }
    //Now we have words in outputStr, format it like this " - FizzBuzz!"
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max: ", max)
  if (! max) {
    reportError("You must provide a maximum");
    return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj: ", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("You must provide at least one factor and text");
    return;
  }
  //Clear error if there is one
  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})
