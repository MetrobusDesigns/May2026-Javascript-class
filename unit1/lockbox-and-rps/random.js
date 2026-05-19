// "use strict";

// const prompt= require ("prompt-sync")({sigint: true});


// //Randomness in Javascript
// //math.random gives us a random number between 0-1, or random decimal "technically"
// //Math.floor rounds down
// //
// console.log (Math.floor(Math.random() * 11 )); //ER - 10 - this rounds down

// console.log (Math.ceil(Math.random() * 12 )); //ER - 12 - this rounds up
// console.log (Math.round(Math.random() * 31 )); //ER - 31 - normal rounding rules +5 up, 4 and below down. Considered less than consistent

// // to modify your range, you can use addition to add the number x to your entire range (add x to both sides)
// // (0 to n-1) + 1 -> 1 to n
// // (0 to 9) + 1 ->  1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);

// // 0 to 
// console.log(Math.floor(Math.random() * 10) + 10);


// //messing with functions
// function getRandom() {
//   return (Math.ceil(Math.random()*10) +1);
// }
// console.log (getRandom());


// //45 to 95 range random
// console.log (Math.floor(Math.random() * 51) + 45);

// //1-n
// //range of 1 - 51 + 44 -> 45 to 95
// console.log (Math.ceil(Math.random() * 51) + 44);

// //Math.ceil = Math.floor +1

// console.log (Math.floor(45.05) -1 ); // ER Infinity! // ER 44

// let random = Math.random();
// console.log(random);
// console.log(random);


// // use a coinflip 
// let coinFlip = Math.floor(Math.random() * 2) + 1;

// if(coinFlip === 1){
//     console.log("Heads")
// } else {
//     console.log("Tails")
// }

// let diceRoll = Math.floor(Math.random() * 6) + 1;

// console.log (diceRoll);


// Dice roll for 1 must be twice as likely, 1 will get 2 slots out of 7. 
let roll = Math.random();
let diceRoll; //open variable for result
// caculates to twice as likely
if (roll < 2/7) diceRoll = 1;
    else if (roll < 3/7) diceRoll =2;
    else if (roll < 4/7) diceRoll=3;
    else if (roll< 5/7) diceRoll=4;
    else if (roll< 6/7) diceRoll=5;
else diceRoll = 6;

console.log(diceRoll);