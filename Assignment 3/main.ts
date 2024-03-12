//Task 3
//Name Cases: Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.

//Store a person name
let personName:string = "Nimra Ulfat"

//printing in lowercase
console.log("lowercase:",personName.toLowerCase());
//printing in uppercase
console.log("uppercase:",personName.toUpperCase());
//printing in tittlecase
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));