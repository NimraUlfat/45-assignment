//Task 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Store the location in an Array
var placeToVisit = ["Saudia Arabia", "South Korea", "Turkey", "Spain", "Thailand"];
//Print the Array in its original order
console.log("original order:", placeToVisit);
//Print the Array in alphabetic order without modifing the actual list
console.log("Alphabtic order:", __spreadArray([], placeToVisit, true).sort());
//Show that the Array is still in its origional order
console.log("original order after sorting:", placeToVisit);
//Print the Array in reverse alphabetic order without changing of the origional list
console.log("reverse alphabetical order:", __spreadArray([], placeToVisit, true).sort().reverse());
//Show that the Array is still is in its original order
console.log("original order after reverse sorting:", placeToVisit);
//Reverse the order of the list
placeToVisit.reverse();
console.log("reverse order:", placeToVisit);
//Reverse the order of the list again to get back to the original order
placeToVisit.reverse();
console.log("Back to orignal order:", placeToVisit);
//Sort the Array in alphabetical order
placeToVisit.sort();
console.log("sorted in alphabetical order:", placeToVisit);
//Sort the Array in reverse alphabetical order
placeToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placeToVisit);
