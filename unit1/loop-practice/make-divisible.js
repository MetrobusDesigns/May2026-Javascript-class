// Write a program that prompts the user for two numberx, x and y. The program should add one to x until it is divisble by y.
// Examples

// Enter x: 
// > 9
// Enter y: 
// > 1
// 9 is divisible by 1

// Enter x: 
// > 9
// Enter y: 
// > 2

// 9
// 10 is divisible by 2
"use strict";
const prompt = require("prompt-sync")({ sigint: true });


let x = Number(prompt("Enter x: "));
let y = Number(prompt("Enter y: "));

// need to write statement which shows x / y with a remainder of 0 = divisible by
let isDivisible = (x, y) => x % y === 0;
console.log(isDivisible(x, y));
if (isDivisible !== 0) 
{console.log(`${x} is divisible by ${y}`);}
else {console.log('false');}
