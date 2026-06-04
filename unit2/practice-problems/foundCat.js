/*
Write a function foundCat that takes in an array of strings. If the word 'cat' is in the array, return true. or else return false. You can assume all strings will be lower case.

let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

foundCat(catArray) => true
foundCat(noCatArray) => false
*/

// function foundCat(string) {
// return string.filter
// (item => item === "cat")
// .length > 0 ? true : false;}

// foundCat(["dog", "bear", "cheese", "cat", "fox"]);  // true
// foundCat(["hi", "bye", "why", "try"]);               // false


function foundCat(arr){
 return arr.reduce((accumulator, item) => 
    accumulator || item === "cat", false) 
 ? true : false;}

 foundCat(["dog", "bear", "cheese", "cat", "fox"]);  // true
foundCat(["hi", "bye", "why", "try"]);    // false