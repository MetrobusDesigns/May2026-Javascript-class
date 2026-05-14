'use strict';

const prompt = require('prompt-sync')({sigint: true});

let result;

let input1 = Number(prompt("Welcome to my fizzbuss calculator. Enter a whole number, any number: "));
if (input1 % 3 === 0 && input1 % 5 === 0)
{result = console.log(`fizzbuzz!`)
    return
}
else if (input1 % 3 === 0 )
{result =console.log (`fizz`)
    return
} else if (input1 % 5 === 0 )
{ result = console.log(`buzz`)
    return
    } 
else {result = console.log (`Invalid entry, please try again!`)
};
