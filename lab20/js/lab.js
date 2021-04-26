// lab.js
// Use .js to use JSON & APIs
// Author: Meg Mocek
// Created: Apr. 26, 2021
// License: Public Domain

var comicObj;

$("#activate").click(function(){
  $.getJSON("https://xkcd.com/614/info.0.json", function(comic){
    comicObj = comic;
    $("#comicTitle").html(comicObj.title);
    var imjObj = $("<img id='pic'>");
    imgObj.attr("src", comicObj.img);
    imgObj.attr("alt", comicObj.alt);

    $("#comicTitle").after(imgObj);
  })
});

// // var myObject = { "id": "watermelon",
// //   "available": true,
// //   "name": "Watermelon",
// //   "price": 5.00,
// //   "countries": ["US", "CA", "MX"]
// // }
//
// $.ajax({
//     url: "https://xkcd.com/614/info.0.json",
//     method: "GET",
//     success: function(data){
//         console.log(data);
//         $("h1").html(data.title);
//         $(".education").html(data.alt);
//         var newImage = $("<img>");
//         newImage.attr("src", data.img);
//         $(".biography").append(newImage);
//     }
// })
