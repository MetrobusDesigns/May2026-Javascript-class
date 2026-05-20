"use strict";
const prompt = require("prompt-sync")({ sigint: true });


let n = parseInt(prompt("Enter a number to double: "));
 
while (n < 100) {
    n = n*2;
    console.log(n);
}
 
