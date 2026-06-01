/* Truthy / Falsy */
/*
Every javascript value has an inherent true/false (boolean) value associated with it
// if that value is true, we consider it to be Truthy
// if that value is false, we consider it to be falsy
*/

// truthy
let num = -1;

// num === true
// truthy === true
// if (num){
//     console.log("num is greater than 10"); // A
// } else {
//     console.log("num is not greater than 10"); // B
// }

// ERROR C


// Everything in JavaScript is Truthy EXCEPT the following:
/*
false (boolean)
0
undefined
null
NaN
"" - empty string
*/

num = 5;
// 5 > 0
// 10 -> 10 === true
// true && true
// num > 0 && num > 10 NOT THE SAME STATEMENT!!!
// 5 > 0 && 5 > 10
// true && false -> Falsy prints out

// if you have a condition, evaluate that as normal!!!
// truthy falsy is something you only have to worry about if there isn't a condition!
// if(1 && num > 0){
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }


let myString = "Test string";

// myString === true || "" === true
// true === true || false === true
// if(myString || ""){
//     console.log("true")
// } else {
//     console.log("false")
// }

let newStudent = {}; // empty object

// newStudent === true
// true === true
// if(newStudent){
//     console.log("true")
// } else {
//     console.log("false")
// }

// empty objects {} and empty arrays [] are both truthy!!!
// meaning all objects and all arrays are truthy!

// just because the array/object might include a falsy value, doesn't mean the entire array/object is falsy!!!! 
// all objects and all arrays are truthy!
let testArray = [5,1,2,3]; // truthy
testArray = [0,0,0]
// if(testArray){
//     console.log("true")
// } else {
//     console.log("false")
// }
// if(testArray[2]){
//     console.log("true")
// } else {
//     console.log("false")
// }

let newStudent2 = {
    name: "Carl",
    grade: 11,
    city: "Retroville"
}

if(newStudent2.city){
    console.log("true")
} else {
    console.log("false")
}