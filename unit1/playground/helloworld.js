// console.log() - prints whatever is inside the () out in the terminal
// console.log("JavaScript Basics!");
// console.log("Let's start!");

// This is a comment!

/* 
    Multi-Line Comment
    Anything
    betweeen 
    here is considered
    to be
    commented
*/

// Variables
// Variables are the building blocks of programming
// they are used to store and keep track of values that we need for our program
// Here, we have variable a that we set equal to the value 5 (Variable Declaration/Variable Initialization)
// let variable = value;
// console.log(a); 
let a = 5; 

// console.log(a)
// console.log("a");

// let bigNumber = 5000000000000000000000;
// console.log(bigNumber)

let b = 7;
// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division

let c = a + b;
// console.log(c);

// console.log(10 + 20);

// variables are reusable!  we can use the variables we create as much as we like and anytime we like (after they've been created)
// console.log(c)

// Strings - programming term for words
// putting anything in quotes ("", '', ``) makes it a string

// Strings are one of 3 main data types in JavaScript.  Numbers are one of the others ones

let firstName = "Timmy"; // String
// console.log(firstName)

// String Concatination - combining multiple strings together with +
// console.log("Hi, my name is " + firstName + ".")

// String Interpolation - let's you use ${} to place your variables inside of a string that's using ``(backticks)
// also known as Template Literal
// console.log(`Hi, my name is ${firstName}. My favorite number is ${c}`)

let lastName = "Turner";

let fullName = firstName + " " + lastName;
//              `${firstName}${lastName}`
// console.log(fullName);

// only need let when you create the variable
let n = 10;
// console.log(n);

// Variable Reassignment
// you can set your variable to any other value after you've already created it with let 
n = 15;
// console.log(n)

let x = 9;
let y = 2;

// x: 9, y: 2
// interpolation
console.log(`x: ${x} - y: ${y}`)

//concatenation
console.log("x: " + x + " - y: " + y );

console.log("x");

let z = x*y;
console.log(z)

let color = "green";
// print: My favorite color is green
console.log(`My favorite color is ${color} \n`)
// change the color to blue
color = "blue";

// print My Favorite color is blue
console.log() //Empty console log creates an empty new line. \n will also create a new line
console.log("My favorite color is " + color)

// conventionally, variables are defined with either a single word or a camelCase word
// camelCase - lower case first word, followed by capitalized words: camelCase, myVariable, newVariable, mySuperCoolFunVariable
// let superCoolVariableThatIWrote

// you CANNOT use symbols/numbers on their own for variable names
// let 4 = 4 // not allowed
// let % = 4; // not allowed
// let myNum4 = 4; // allowed

// Escape Characters - if you put a \ before a certain character, that character will be interpereted as the actual string character that it is supposed to be
// for example, when using "" inside of a string that is already using "", 
// you can make them appear by escaping the " with \ like so: \"
console.log("This person says \"Hello!\"")

let num1 = 10;
num1 = num1 + 1; // set num1 equal to the value of num1 + 1
// console.log(num1);

// increment operator
// variable++
num1++; //adds 1 to our variable and changes its value to that new number
// console.log(num1);

num1 += 1; // shorthand for num1 = num1 + 1
// adds the number to num1 and reassigns num1 to the new value
// console.log(num1);

num1 += 1;
// console.log(num1);

// num1 is 14
num1 + 1; // this statement does NOT reassign the value of num1!!! that means that after this line, num1 will still have its previous value which is 14
// num1 didn't change!!!
// console.log(num1)

num1 += 1;
// console.log("New! " + num1)

let num2 = 4;

// add 5 to num2
// += add and reassign operator
num2 += 5;
// adding and reassigning (no operator)
num2 = num2 + 5;
// both of the above will do the same thing!!
// the first way with += is just less code because we have a specific operator for the action

// console.log(num2)

// decrement operator
num2--;
// console.log(num2)

// +=, -=, *=, /=
num2 *= 5;
// num2 = num2 * 5;
// console.log(num2)


// we use the value of num2 and add 2 but we do NOT change the value of num2 to the sum
// console.log(num2 + 2)

// console.log(num2)

// Modulus or Mod - gives you the remainder of your division expression
console.log("Modulus %")
console.log(10 % 3)
console.log(10 % 4)
console.log(10 % 5)

// Squaring/exponents
let num3 = 5;
console.log(num3 * num3);
console.log(num3 ** 2); // num3^2
console.log(num3 ** 3)
// Math library - built in mathmatical functions that we have access to in JavaScript
console.log(Math.pow(num3,2)); // num3^2

console.log(Math.sqrt(100)) 

console.log()
let p = 3;
let q = 8;

// be careful! we're NOT swapping the values!!
p = q; // p: 8, q: 8
q = p; // p: 8, q: 8 

console.log(`p: ${p}`); // 8
console.log(`q: ${q}`); // 3

console.log("Swap!");
// if you ever need to swap the value of 2 variables, you can use a temporary (temp) to keep track of one of your original values
// resetting to their original values
p = 3;
q = 8;
let temp = 0;

// our temporary variable is now keeping track of p's original value
temp = p; 
p = q; // p: 8, q: 8;
q = temp;

console.log(`p: ${p}`);
console.log(`q: ${q}`);
console.log(temp)

// same thing, just with strings
let str1 = "string 1";
let str2 = "string 2";
let strTemp = ""; // empty string

strTemp = str1;
str1 = str2;
str2 = strTemp;

console.log()
console.log(str1)
console.log(str2)

console.log();