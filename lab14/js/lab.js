// lab.js
// Use .js to make JavaScript Classes & Objects
// Author: Meg Mocek
// Created: Mar. 22, 2021
// License: Public Domain

//I hope I did this right because I tried to follow along with Wes in class.

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

var myFather = new Person("Frank", "Mocek", 59, "brown");
document.getElementById("demo").innerHTML =
"My father is " + myFather.name();
