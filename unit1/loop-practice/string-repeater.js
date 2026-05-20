"use strict";
const prompt = require("prompt-sync")({ sigint: true });

let userInput = prompt('enter a string of letters or numbers less than 9 characters long: ');
let repeater = '';

for (let i = 0; repeater.length < 10; i++) {
repeater += userInput;
console.log(repeater);
};

// repeater = repeater.slice(0, 10);
