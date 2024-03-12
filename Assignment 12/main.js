//Task 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing 
//each person’s name, print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
//Starting with the array used in Exercise 11
var friendsName = ["Taeghung", "Jungkook", "Jimin", "Suga"];
//Printing the same message withpersonlized person name
friendsName.forEach(function (friendName) { return console.log("Hello ".concat(friendName, " Whats going on?")); });
