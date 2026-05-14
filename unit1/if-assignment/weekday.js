'use strict';

const prompt = require('prompt-sync')({sigint: true});

let result;
//use ONLY if/else statements, no functions
let input1 = prompt('This is a day of the week calculator. Enter a number between 1 and 7: ')
if (input1 === "1")
   { result= console.log('1 is equal to Sunday!');
   }
   else if (input1 === "2")
   { result= console.log('2 is equal to Monday!');
   }
   else if (input1 === "3")
   {result = console.log('3 is equal to Tuesday!')
   }
    else if (input1 === "4")
   {result = console.log('4 is equal to Wednesday!')
   }
    else if (input1 === "5")
   {result = console.log('5 is equal to Thursday!')
   }
    else if (input1 === "6")
   {result = console.log('6 is equal to Friday!')
   }
    else if (input1 === "7")
   {result = console.log('7 is equal to Sunday!')
   }
    else {
       result = console.log('Invalid entry, please try again'); 
    }