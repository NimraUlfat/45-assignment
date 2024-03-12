//Task 16
//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your 
//program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//Print a new set of invitation messages, one for each person in your list.
//Creating a Guestlist Array
var guestList = ["Taeghung", "Jungkook", "Jimin", "Jhope"];
//Making Veriable for those who can't come
var dontcome = guestList[0];
//Print the Guest Name who can  not come
console.log(dontcome, "can not come");
//Add or Remove Values from guestlist Array
guestList.splice(0, 1, "Suga");
//Message print for Bigger Table
console.log("Good Nwes to all my friends! We have found a bigger table for dinner");
//Adding a new guest at starting index of Array
guestList.unshift("Namjoon");
//Adding a new guest at ending index of Array
guestList.push("Jinu");
//Adding a new guest at middle index of Array
var middleIndex = Math.floor(guestList.length / 2);
//Addind a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Kookie");
//Print Message to Updated List
console.log("Updated list of Guests");
//Sending a Invetation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", Would you like to dinner with us")); });
