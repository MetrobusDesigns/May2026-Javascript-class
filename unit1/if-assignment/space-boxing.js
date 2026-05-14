'use strict';

const prompt = require('prompt-sync')({sigint: true});

let result;

let input1 = Number(prompt("Welcome to your planetary weight calculator! Enter your current weight: "));
let input2 = prompt("Enter the planet you are fighting from---1=Venus 2=Mars 3=Jupiter 4=Saturn 5=Uranus 6=Neptune: ");

if (input2 === "1") {
    result = input1 * 0.78;
    console.log (`Your space weight in Venus is ${result}`)
    return;
}
 if (input2 === "2") {
    result = input1 * 0.39;
    console.log (`Your space weight in Mars is ${result}`)
    return;
}
if (input2 === "3") {
    result = input1 * 2.65;
    console.log (`Your space weight in Jupiter is ${result}`)
    return;
}
if (input2 === "4") {
    result = input1 * 1.17;
    console.log (`Your space weight in Venus is ${result}`)
    return;
}
if (input2 === "5") {
    result = input1 * 1.05;
    console.log (`Your space weight in Uranus is ${result}`)
    return;
}
if (input2 === "6") {
    result = input1 * 1.17;
    console.log (`Your space weight in Venus is ${result}`)
    return;
}
else {
    console.log('Your entry was invalid, please try again!');
};


