// lab.js
// Use .js to make JavaScript Events & Forms
// Author: Meg Mocek
// Created: Mar. 3, 2021
// License: Public Domain

//In class code with Wes
var buttonEl = document.getElementById("my-button");
console.log("El Button", buttonEl);

buttonEl.addEventListener("click", function(){
  var name = prompt("What's your name?");
  var titleEl = document.getElementById("user-name");
  console.log("Title element: ", titleEl);
  titleEl.innerText = "Hello, " + name;
})
