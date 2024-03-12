//Task 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
//time for the dinner, and you have space for only two guests.

//Start with your program from Exercise 16. Add a new line that prints a message saying 
//that you can invite only two people for dinner.

// Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.

// Print a message to each of the two people still on your list, letting them know 
//they’re still invited.

//Remove the last two names from your list, so you have an empty list. Print your list 
//to make sure you actually have an empty list at the end of your program.


//ainitial list of guests
var guestList = ["Taeghung", "Jungkook"];
//Informing that only two people can be inivte
console.log("Due to limited space, only two people can be invited for dinner.");
//Removing guest untill two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", you are no longer invited to dinner."));
}
//Printing invitation to the remaining two guests
guestList.forEach(function (guestList) {
    console.log("Dear ".concat(guestList, ", you are still invited to dinner."));
});
//Removing the last two names from the list 
guestList.pop();
guestList.pop();
//Printing the final list to confirm its empty
console.log("Final guestList:", guestList);