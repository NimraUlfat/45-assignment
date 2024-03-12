//Task 5
//Stripping Names: Store a person’s name, and include some whitespace characters 
//at the beginning and end of the name. Make sure you use each character combination, 
//"\t" and "\n", at least once. Print the name once, so the whitespace around the name is 
//displayed. Then print the name after striping the white spaces.
//Storinig person name include whitespace
var whitespaceName = "\n\t Nmira Ulfat \t\n";
//Printing name with white space 
console.log(whitespaceName);
//Storinig person name without whitespace
var withoutwhitespaceName = whitespaceName.trim();
//Printing name without white space
console.log(withoutwhitespaceName);
