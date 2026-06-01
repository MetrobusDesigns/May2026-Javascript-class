/* Ternary Operator */

let str = "";

let num = 45;

if (num >= 50){
    str = "your number is greater than 50"
} else {
    str= "Your number is not greater than 50"
}

console.log(str);

str = num >= 50 ? "Your number is MORE than 50" : "Your number is LESS than 50!"
 
console.log(str);

// https://gist.github.com/glf30/7eb65bf8124fa69ff2adf8bde0c1a85d

/* Ternary Operator */

let str = "";

let num = 49;

// if(num >= 50){
//     str = "Your number is greater than or equal to 50!";
// } else {
//     str = "Your number is less than 50";
// }

// Ternary operator
// alternate syntax for an if-else statement where we need to set the value of a variable based on a condition
// variable = condition ? condition is true : condition is false
str = num >= 50 ? "Your number is greater than or equal to 50!" : "Your number is less than 50";

// same thing on multiple lines
str = num >= 50
    ? 'Your number is greater than or equal to 50!'
    : 'Your number is less than 50'


console.log(str);


let colors = ["red", "blue", "green", "yellow"];
let str2 = "";

// check if the colors array has the color purple
// if so set str2 to "We have purple!"
// if not, set it equal to "Purple not found"

// condition: colors.includes("purple")
// what happens if true
// what happens if false

str2 = colors.includes("purple") ? "Yes, it has purple" : "No, it does not have purple"; 

console.log(str2);