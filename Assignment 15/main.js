//Task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone 
//else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your 
//program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name 
//of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
//Guest list
var guestList = ["Taeghung", "Jungkook", "Jimin", "Jhope"];
//Guest who can not come
var donotcome = guestList[0];
//Replacing the name of guest who cannot come
console.log(donotcome, "Can not come");
//Adding a new person
guestList.splice(0, 1, "Suga");
//Printing a invitation message
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, ",would you like to dinner with me?")); });
