// lab.js
// Use .js to make JavaScript Events & Forms
// Author: Meg Mocek
// Created: Mar. 3, 2021
// License: Public Domain

//In class code with Wes
var titleEl = document.getElementById("user-name");
console.log("Title: ", titleEl);

var buttonEl = document.getElementById("mybutton");
console.log("Button", buttonEl);

var inputEl = document.getElementById("my-input");
console.log("Input Field", inputEl);

buttonEl.addEventListener("click", function(){
  var name = inputEl.value;
  //var name = prompt("What's your name?");
  titleEl.innerText = "Hello, " + name;
  inputEl.value = "";
})
