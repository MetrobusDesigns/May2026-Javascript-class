"use strict";
const prompt = require("prompt-sync")({ sigint: true });


let userInput = Number(prompt("How many Fibonacci sequence numbers would you like to see?"));
 
let a = 0;
let b = 1;
 
for (let i = 0; i < userInput; i++) {
    console.log(a);
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
};

