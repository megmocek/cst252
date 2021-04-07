// lab.js
// Use .js to make Advanced JQuery
// Author: Meg Mocek
// Created: Apr. 7, 2021
// License: Public Domain

//Borrowed code from Wes Modes

//Add event listener to button
$("#thing1-button").click(function(){
  $("#thing2-button").toggleClass("george");
})

//Add event listener to button
$("#thing1-button").click(function(){
  $("#thing2-button").toggleClass("fred");
})

$("#submit").click(function(){
  //pure JS
  //var fullname = document.getElementById("full-name").value;

  //JQuery
  var fullname = $("#fullname").val();
  $("replace").html(fullname + "'s");
  $("#thing1-button").html(fullname + " 1");
  $("#thing2-button").html(fullname + " 2");
})
