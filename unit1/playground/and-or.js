//Logical Operators

// let number = 50;

// if (number >= 50){

//     console.log("Your number is greater than 50!");

// } else {
//     console.log("Your number is less than or equal to 50!");
// }

let age = 23; 

  if(age >= 18 && age <= 21){
    console.log("you are old enough to vote but not smoke");

 if (age >= 22 || age <=26){

    console.log("You are the goldilocks age!");
}
};

boolean1 = true;
boolean2 = false;
boolean3 = true;
let boolean4 = false;
if(boolean1 === false && boolean2 === true || (boolean3 === false || boolean4 === true)){
    console.log("TRUE");
} else {
    console.log("FALSE");
}
if(boolean1 === true && boolean2 !== false && boolean3 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

if(boolean1 === true && !(boolean2 === false || boolean3 === false)){
    console.log("TRUE");
} else {
    console.log("FALSE");
}


boolean1 = true;
boolean2 = false;
boolean3 = true;
console.log("10. ");
// (boolean1 === true || boolean2 === true) && false !== true
if((boolean1 === true || boolean2 === true) && !boolean3 !== true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}
console.log("Light Switch: ")
let lightSwitch = true;
lightSwitch = !lightSwitch;
console.log(lightSwitch);

// Logical Operators

// let myNum = 49;

// if(myNum >= 50) {
//     console.log("Your number is greater than 50");
// }

// 
let age = 25;

// age <= 24
// Logical AND Operator - &&
// when using && you are checking that each condition is true
/*
    if(condition1 === true && condition2 === true){
        // run this code
    }
    condition1 AND condition2 both have to evaluate to true in order to run the code in the if statement.  if any statement that is joined with an AND is false, the whole statement will evaluate to false 
*/
if(age >= 18 && age <= 24){
    console.log("You can vote but not rent a car");
}

age = 15;
// age === 16
// age === 17
// Logical OR Operator - ||
/*
    when using || we check to see that at least one of the conditions is true and if it is, we run the code in the if statement

    if(condition1 === true || condition2 === true){
        // run this code
    }
    here, condition1 OR condition2 can evaluate to true in order to run the code
*/
if(age === 16 || age === 17){
    console.log("You can drive but not vote");
}

let boolean1 = false;
let boolean2 = false;

// if(boolean1 === true){
//     console.log(boolean1);
// }

console.log("1. ");
if(boolean1 === true || boolean2 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("2. ");
if(boolean1 === false || boolean2 === false){
    // boolean1 does equal false, so the condition on the left evaluates to true
    // boolean2 equals false, so the condition on the right evaluates to true
    // both statements are true, which means the entire statement evaluates to true
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// regardless of logical operator, if every condition evaluates to true, the whole statement will evaluate to true
// if every condition evaluates to false, the whole statement will evaluate to false


boolean1 = false;
boolean2 = true;
let boolean3 = false;

console.log("3. ")
if(boolean1 === true || boolean2 === true || boolean3 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("4. ")
// TRUE || TRUE && FALSE
// TRUE || FALSE
if(boolean1 === false || boolean3 === false && boolean2 === false){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("4. with ()")
// (TRUE || TRUE) && FALSE
// TRUE && FALSE
if((boolean1 === false || boolean3 === false) && boolean2 === false){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("5. ");

boolean1 = true;
boolean2 = false;
boolean3 = false;
// boolean2 === true -> false
// boolean3 === true -> false
// boolean2 === true && boolean3 === true -> false && false -> false
// boolean1 === true -> true
// true || false -> true
if(boolean1 === true || boolean2 === true && boolean3 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("5. with ()")
// () - parenthesis or Grouping Operator
// just like in math, do the parenthesis first
// (true || false) && false
// true && false
if((boolean1 === true || boolean2 === true) && boolean3 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

/*
Logical Operators Hierchy
()
! (the operator)
&&
||

This will determine which statements you evaluate first 

when you have 2 conditions that are joined by an &&, if either is false, the statement evaluates to false (&& binds stronger to false)

when you have 2 conditions that are joined by an ||, if either is true, the statement evaluates to true (|| binds stronger to true)
*/

boolean1 = true;
boolean2 = false;
boolean3 = true;
let boolean4 = false;
// false
console.log("6. ")
if(boolean1 === false && boolean2 === true || (boolean3 === false || boolean4 === true)){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("7. ")
if(boolean1 === true && boolean2 !== false && boolean3 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// ! - not operator
// takes the truth value of the variable/condition and sets it equal to the opposite value (reverses the value)

boolean1 = true;
boolean2 = false;
boolean3 = true;

console.log("8. ")
if(!boolean1 === true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("boolean 1:")
console.log(boolean1) // true
console.log(!boolean1) // false
console.log(boolean1)

console.log("9. ")
/*
(boolean2 === false || boolean3 === false) -> (true || false) -> true 
-> !true -> false
boolean1 === true && false -> true && false -> false

*/
if(boolean1 === true && !(boolean2 === false || boolean3 === false)){
    console.log("TRUE");
} else {
    console.log("FALSE");
}


boolean1 = true;
boolean2 = false;
boolean3 = true;
console.log("10. ");
// !boolean3 !== true
// !true !== true
// false !== true -> true
// (boolean1 === true || boolean2 === true) && false !== true
//     (true || false) -> true
// true && true
if((boolean1 === true || boolean2 === true) && !boolean3 !== true){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

console.log("Light Switch: ")
// change the value of our light switch to the opposite value
let lightSwitch = true;
// reassignment!
lightSwitch = !lightSwitch; // flips the boolean value of our lightSwitch variable
console.log(lightSwitch);

let operator = "greyson!"
if(operator === "greyson!"){
    console.log("it's an imposter :/")
} else {
    console.log("yes, it's greyson!")
}

lightSwitch = true
//
if(lightSwitch){ // if(boolean) is shorthand for if(boolean === true)
    console.log("TRUE");
} else {
    console.log("FALSE");
}

if(!lightSwitch){ // if(!boolean) is shorthand for if(boolean !== true)/if(boolean === false)
        console.log("TRUE");
} else {
    console.log("FALSE");
}

boolean1 = true;
boolean2 = false;
console.log("Last one!")
if(boolean1 && !boolean2){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

/*


if (num % 15 === 0) {
  // if a num is divisible by 3 AND 5 it is also divisible by 15!
  console.log("fizzbuzz");
} else if (num % 3 === 0) {
  // divisible by 3, if there is no remainder, it must be divisible!
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}
 */

// fizzbuzz
// numbers divisible by 3 -> fizz
// numbers divisible by 5 -> buzz
// numbers divisible by 3 and 5 -> fizzbuzz
// all other numbers stay the same

console.log("FIZZBUZZ PROBLEM WITH &&")
let fizzNum = 31;
if(fizzNum % 3 === 0 && fizzNum % 5 === 0){
    console.log("fizzbuzz")
} else if(fizzNum % 3 === 0){
    console.log("fizz")
} else if(fizzNum % 5 === 0){
    console.log("buzz")
} else {
    console.log(fizzNum)
}

// nested if statements

age = 22;

if(age >= 18){
    console.log("You are over 18!");
    if(age <= 24){
        console.log("You can vote but not rent a car");
    }
    console.log("You are still over 18");
}

fizzNum = 34
// fizzBuzz with nested if statements
if(fizzNum % 3 === 0){
    // num must be divisible by 3
    if(fizzNum % 5 === 0){
        console.log("fizzbuzz");
    } else {
        console.log("fizz");
    }
} else if(fizzNum % 5 === 0){
    console.log("buzz")
} else {
    console.log(fizzNum)
}



