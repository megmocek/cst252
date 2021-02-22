// lab.js
// Use .js to play with functions
// Author: Meg Mocek
// Created: Feb. 22, 2021
// License: Public Domain

//sortUserName
Function sortUserName() {
  var userName = window.prompt("Hi, please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //Split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //Sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //Join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//OutPut
document.writeln("Hey, I fixed your name: "),
        sortUserName(), "</br>";
