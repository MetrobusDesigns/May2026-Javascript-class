const prompt = require("prompt-sync")({ sigint: true });
/* functions */

/*
Functions 
- Functions allow us to make a section of code reusable throughout our program
- creating functions allows us to clean up our code by making our tasks more readable while also reducing the amount of code we need to run our task multiple times
- if you find yourself repeating a task, consider creating a function for that task!
*/

let num1 = 5;
let num2 = 7;
console.log("before");
// Function Definition - where we create the function
function add(a, b) {
  // console.log(`a: ${a}`);
  // console.log(`b: ${b}`);

  let result = a + b;
  // console.log(result); //if you only need to print, console log
  return result; // if you need the value, return
  // beyond that, pay attention to what the problem is asking!
  // unreachable code/dead code
  // console.log(`here's the result!`);
}

console.log("After");
// Function Call - where we use the function in our program
let returnValue = add(num1, num2);
// console.log(returnValue);
// console.log(add(20,30));
// console.log(add(22,11));

// Greeting function - take in a name, and a programming language

function greeting(myName, age, language) {
  return `Hi, my name is ${myName}. I am ${age} years old and I code in ${language}.`;
}

console.log(greeting("Jim", 25, "Python"));
console.log(greeting("Jan", 34, "PHP"));
let myGreeting = greeting("Alan", 29, "JavaScript");
console.log(myGreeting);

/*
function structure
Function Definition:
function functionName(parameters){
 // your code (function body)
}
Function Call:
functionName(arguments)
parameters - placeholder variables that we set up in our function definition
arguments - values that you pass inside the function when you call it
when you call the function, the amount of arguments you need has to match the amount of parameters in the function
you can have as many parameters as you want!  0-3 is pretty common, but you'll see functions that use more.
inside your function, the arguments you pass in can be accessed as their respective parameters. for example, consider the function
function newFunction(x,y){
}
newFunction(10,20)
inside newFunction, the values 10 and 20 will be treated as x and y respectively
*/

let people = ["Bob", "Wendy", "Kate", "Sean"];
let days = ["Monday", "Tuesday", "Wednesday"];
let colors = ["purple", "blue", "brown", "green", "pink", "orange"];

/*
Bob
Wendy
Kate
Sean
*/

// for(let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// for(let i = 0; i < days.length; i++){
//     console.log(days[i]);
// }

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// printArray - this function will take in an array as a parameter and then print out each element one at a time on its own line
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(people);
console.log();
printArray(days);
console.log();
printArray(colors);
console.log();

let numbers = [1, 4, 37, 10, 200];
printArray(numbers);

// doubleNumber - takes in a number and returns that same number but doubled

function doubleNumber(x) {
  // x = x*2;
  // return x;

  // let result = x*2;
  // return result;

  return x * 2;
}
console.log("\nDouble Number");
console.log(doubleNumber(5));
let numDouble = doubleNumber(50);
console.log(numDouble);

// this function takes in a number and returns a boolean.  if it's greater than 50, return true.  or else return false
function greaterThan50(x) {
  if (x > 50) {
    
    return true;
    // console.log("hello!");
  }
//   else {
//     return false
//   }

  // the only way to reach this code is for the if statement condition to be false
  return false;
}
console.log("\nGreater Than 50");
console.log(greaterThan50(55));
console.log(greaterThan50(45));

let promptNum = Number(prompt("Enter a number: "));

// functions can access variables written outside of the function
// promptNum is written outside of bigNumber() and can be accessed inside bigNumber()

console.log(bigNumber())

// functions can be accessed from anywhere in the program, so you are allowed to call a function before its definition
function bigNumber(){

    if(promptNum > 100){
        return "Big number!";
    } else if(promptNum > 50){
        return "Medium number!";
    } else {
        return "Small number!";
    }

}