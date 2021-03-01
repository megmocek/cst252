// lab.js
// Use .js to make JavaScript for the Web
// Author: Meg Mocek
// Created: Mar. 1, 2021
// License: Public Domain

oldElement = document.getElementById("img");
newElement = document.createElement("div");
oldElement.appendChild(newElement);
newElement.id = "Gimli";
newElement.innerHTML = "My cat is cute.";
newElement.style.fontSize = "30pt";
newElement.style.fontFamily = 'Courier New';
newElement.style.color = "#8A0A23";
