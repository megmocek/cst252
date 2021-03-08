// lab.js
// Use .js to make JavaScript Conditionals
// Author: Meg Mocek
// Created: Mar. 8, 2021
// License: Public Domain

//Return Air, Fire, Water, and Earth

function sortingSign(str) {
  len = str.length;
  mod = len % 4;
  
  if (mod == 0) {
    return "Air"
  }
  else if (mod == 1) {
    return "Fire"
  }
  else if (mod == 2) {
    return "Water"
    }
  else if (mod == 3) {
    return "Earth"
  }
}

var myButton = document getElementById("button");
myButton.addEventListener("click", function() {
  var name = document getElementById("input").value;
  var sign = sortingSign(name);
  newText = "<p>The Zodiac Element Generator has determined that you are: " + sign + "<p>"
  document.getElementById("output").innerHTML = newText;
})
