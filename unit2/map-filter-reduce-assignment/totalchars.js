//Write a function called totalCharacters that takes an array of strings and returns the total number of characters across /all strings.


//const totalChars = (str) - reduce def: 

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue, );
const strings = ["cat", "hello", "JS"];

const initialValue = 0;

const totalCharacters = strings.reduce(
  (accumulator, currentValue) => accumulator + currentValue.length,
  initialValue,
);

console.log(totalCharacters);