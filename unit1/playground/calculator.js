'use strict'

const prompt = require('prompt-sync')({sigint: true});

//prompt-sync
//allows us to get user input from the terminalusing prompt()
//the input you get will always be a string
  let input1 = prompt("Welcome to my basic calculator! Enter your first number: ");
  //  while — keeps repeating the block inside {} as long as the condition in the parentheses is true.
  while (isNaN(Number(input1))) {
      input1 = prompt("Your input is invalid. Enter a valid number: ");
  } //loop runs as long as the input is invalid,
  let myPrompt1 = Number(input1); //converts the input to a number

let validOperators = ["+", "*", "-", "/"];
let myPrompt3 = prompt("Enter a valid operator symbol to add (+), subtract (-), multiplay (*), or divide (/) (+, -, *, /): ");
// .include - Determines whether an array includes a certain element, returning true or false
while (!validOperators.includes(myPrompt3)){  
    //! — the "not" operator. It flips true to false and false to true.
    myPrompt3 = prompt("Invalid entry. Enter a valid operator: (+, -, *, /)")
}//loop runs as long as the input is invalid,

  let input2 = prompt("Enter your second number: ");
  while (isNaN(Number(input2))) {
      input2 = prompt(`Your input is invalid. Enter a valid number: `);
  } //loop runs as long as the input is invalid,
  let myPrompt2 = Number(input2); //converts the input to a number


let result; //result must be empty to provide the answer

if (myPrompt3 === "+") {
    result = myPrompt1 + myPrompt2;
} else if (myPrompt3 === "-") {
    result = myPrompt1 - myPrompt2;
} else if (myPrompt3 === "/") {
    result = myPrompt1 / myPrompt2;
} else if (myPrompt3 === "*") {
    result = myPrompt1 * myPrompt2;
} else {
    result = "Invalid entries. Please retry your query again."; //in case anything else goes wrong, start over
};

console.log(`${input1} ${myPrompt3} ${input2} =`, result);