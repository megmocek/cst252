// lab.js
// Use .js to use AJAX
// Author: Meg Mocek
// Created: Apr. 14, 2021
// License: Public Domain

$("#btn").click(function(){
  $.ajax({
    url:"https://dog-api.kinduff.com/api/facts",
    data: {},
    type: "get",
    dataType: "json",
  })
  .done(function(results){
    console.log(results);
    var fact = results.facts[0];
    $("#output").html(fact);
  })
  .fail(function(xhr, status, errorThrown){
    alert(errorThrown + "status" + status);
  });
})
