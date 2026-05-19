//red/blue, red yellow, blue yellow combos

"use strict";

let promptSync = require("prompt-sync")();
let input = prompt ("Enter a color to deletruct (e.g. purple, orange green) or two colors to combine (e.g. red, yellow, blue): ").toLowerCase();

// --- Combine the two words entered ---//
let combinedColor = input.includes(" ");
//enter the color combos
let isRedBlue = input.includes("red") && input.includes("blue") && combinedColor; //red AND blue AND
let isRedYellow = input.includes("red") && input.includes("yellow") && combinedColor; //red AND yellow AND
let isBlueYellow = input.includes("blue") && input.includes("yellow") && combinedColor; // blue AND yellow AND
let combinedResult =
  isRedBlue && "purple" || //OR
  isRedYellow && "orange" || //OR
  isBlueYellow && "green"  || //OR
  "invalid, please try again";

// --- deconstruct the one color entered //

let isPurple = input.includes("purple") && Deconstruct;
  let isOrange = input.includes("orange") && Deconstruct;
    let isGreen = input.includes("green")  && Deconstruct;
      let Deconstruct = !combinedColor;
//make it look pretty
// deletruct the result ---//
let deconstructColor =
  isPurple && "red + blue" || //OR
    isOrange && "red + yellow" || //OR
      isGreen && "blue + yellow" || //OR
        "invalid please try again";

// -0-- print//
//use ternary operator based on options//
let result = combinedColor ? combinedResult : deconstructColor; //IS IT COMBINED COLOR / COMBINED RESULT, ELSE DECONSTRUCT THE RESULT
console.log(`Your result is: ${result}`);