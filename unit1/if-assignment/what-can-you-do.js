'use strict';

const prompt = require('prompt-sync')({sigint: true});

let result;
//use ONLY if/else statements, no functions
let input1 = Number(prompt('This app calculates your age and whether you are old enough to drive and vote. Enter your age: '));
 
if (input1 <= 15)
   { result= console.log("You can't drive, Sorry!");
   }
   else if (input1 === 16 || input1 === 17)
   { result= console.log(`You can drive but you can't vote!`);
   }
   else if (input1 >= 18 && input1 <= 24)
   { result= console.log(`You can vote and drive, but you can't rent a car!`);
   } 
   else if (input1 >= 25)
   { result= console.log(`You can do anything you want now!`);
   }
   else {
    result = "Invalid data entry. Please retry your query again."; //in case anything else goes wrong, start over
};