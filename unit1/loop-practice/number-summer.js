"use strict";
const prompt = require("prompt-sync")({ sigint: true });

/* write a program that continually prompts the user for numbers greater than 0 until the user enters a 0 at which point the sum of all the inputted numbers is logged out.
Example

Enter some numbers (type 0 when complete):
> 20
> 10
> 3.2
> 0

Those numbers sum to 33.2
*/

let userInput = -1; 
let sumAdd = 0;
console.log('Enter some random numbers. When complete, enter 0 to add them')
while (userInput != 0){
userInput= Number(prompt(">: "))
sumAdd += userInput;
};
console.log(`Those numbers add up to ${sumAdd}`);