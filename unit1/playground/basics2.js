let str1 = "Computer";

// String Methods - built in string functions

// .toUpperCase() - converts your string to uppercase
console.log(str1.toUpperCase());

// same thing, just lower case
console.log(str1.toLowerCase());

// str1 does NOT change if we call one of the above methods on the string
console.log(str1);

// make it so str1 DOES change to upper case
str1 = str1.toUpperCase();

console.log(str1);

let str3 = "Today is Wednesday";
let str2 = "Laptop";
console.log (str2.substring(0,2));
console.log (str2.substring(3,6));
console.log (str2.substring(1,5));
console.log (str2.substring(1));

const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""

let day = str3.substring(9);
// console.log(`The day: ${day}`);

let a = 5; // number
let b = "5"; // string

// typeof - lets us check the type of our data
console.log(typeof a);
console.log(typeof b);

// number + string 
// when we try to add a number to a string, what we're really doing is concatenating our data
// the number gets converted to a string and we will concatenate as normal
console.log(a + b); //5"5"  55  error 10
console.log(typeof(a + b))

let c = "word"
console.log(a + c) // 5word

// Converting Data Types
// we can use Number() and String() to convert our data types
console.log("\nConverting Data Types")
console.log(a + Number(b));

console.log(String(a) + Number(b))

let decimal = "55.5";
console.log(Number(decimal))
console.log(typeof Number(decimal))

console.log(Number(c)); //NaN - Not a Number

let d = 10;
let strD = String(d);
let strD2 = d + "" //also converts numbers to strings
console.log(typeof d);
console.log(typeof strD);
console.log(typeof strD2);

let e = "five";
console.log(Number(e)); //NaN
console.log(typeof e);
console.log(typeof Number(e)); 

console.log("\nNew e!")
e = "5";
console.log(Number(e)); 
console.log(typeof e); // string
console.log(typeof Number(e)); // number
