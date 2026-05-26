/* 
This review covers:

1. variables
2. if statements
3. logical operators
4. loops
5. arrays
*/

let bool1 = true;
let bool2 = false

if (bool1 === true && bool2 === false) {
        console.log("true");
        } else {
            console.log("false");
        }


/* Loops */

// goes 

let i =1;
while (i<31) {
  if (i%3 === 0) {
    console.log(`Row ${i} is divisible by 3`);
  } else {
    console.log(`Row ${i} is NOT divisibleby 3`);
  }

  i++;
}

let myArray = [5, 10, 20, 40, 80];

myArray.push(200);
console.log(myArray);

for(let i =0; i < myArray.length; i++){

    console.log(myArray[i]);
};

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > 50) {
    console.log(myArray[i]);
  }
}

let arr2 = [3, 8, 10, 15, 21, 25, 30]

for(let i=0; i < arr2.length; i++){
console.log();

}

// if statements

const score = 70;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");  // this runs
} else {
  console.log("Below B");
}

// Starter code — fill in the blanks!

const secretNumber = Math.floor(Math.random() * 10) + 1;
const previousGuesses = [];

function playGame(guess) {
  // 1. Validate the guess (must be 1–10)
if guess = secretNumber 
return (console.log("You got it!");)
  // 2. Add guess to previousGuesses array

  // 3. Check if guess is correct, too high, or too low

  // 4. Return a message to the player

}