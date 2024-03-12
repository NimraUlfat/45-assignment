//Task 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one 
//False result for each of the following:

//Tests for equality and inequality with strings

//Tests using the lower case function

//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to

//Tests using "and" and "or" operators

//Test whether an item is in a array

//Test whether an item is not in a array


let name_1 : string = "Nimra"
let name_2 : string = "Nimra Ulfat"
let name_3 : string = "Miss Nimra Ulfat"
//if (name_1 == name_3){
  //  console.log("names are equal")
//}else{
  //  console.log("names are not equal")
//}
//if (name_1 != name_2){
  //  console.log("names are equal")
//}
//if (name_1 != name_3){
   // console.log("names are equal")
//}
let age_1 : number = 18
let age_2 : number = 20

//if (age_1 == 18){
   // console.log("eligible for votecast")
//}

//if (age_1 != 20){
  //  console.log("eligible for votecast in older category")
//}

//if (age_1 <= age_2){  //less than
  //  console.log("younger")
//}

//if (age_2 >= age_1){  //greater than
  //  console.log("older")
//}

//if (age_1 == 18 &&  age_2 == 20){
    //console.log("person is eligible for votecast")
//}

//if (age_1 == 18 ||  age_2 != 20){
    //console.log("person is eligible not for votecast")
//}

let fruits : string [] = ["Apple","Mango","Orange","Strawberry"]
//if (fruits.includes("Orange")){
   // console.log("Orange is in fruits list")
//}

if (!fruits.includes("Pear")){
    console.log("Pear is not include in an array")
}