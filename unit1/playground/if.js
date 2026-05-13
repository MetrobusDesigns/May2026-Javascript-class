

// if statements
// if statements are used to evaluate conditions in our program
// if true, I will do!
/*
    if(condition){
        // your code
    }
    if the condition is true, run the code inside the if statement {}
    if not, move on    
*/
// if(num > 10) {
//     console.log("Your number is " + num);
// }

// if(num < 10){
//     console.log("Your number is less than 10");
// }

// if(num === 10){
//     console.log("Your number is equal to 10");
// }

// if(num >= 10){
//     console.log("Your number is greater than or equal to 10");
// }

// if(num <= 10){
//     console.log("Your number is less than or equal to 10");
// }
// let num = 10;


// if(num !== 10){
//     console.log("Your number is NOT equal to 10");
// } else console.log("Your number IS equal to 10! \n ");



// Comparison Operators
/*
=== - equal to
< - less than
> - greater than
<= - less than or equal to
>= - greater than or equal to
!== - not equal to
*/

num = "15";

// for your if else blocks, only one condition can be met.  if multiple conditions would be true, only the first true one is evaluated
// if(num >= 10){
//     console.log("Your number is greater than or equal to 10");
// } else if(num <= 10) {
//     console.log("Your number is less than or equal to 10")
// } else if(num === 10){
//     console.log("Your number is equal to 10")
// }

// here, we have 3 separate conditions.  if any of them evaluate to true, the code inside their respective {} will run
// if num is equal to 10, for example, all of these will run
if(num >= 10){
    console.log("Your number is greater than or equal to 10");
} 
else if(num <= 10) {
    console.log("Your number is less than or equal to 10")
} 
else if(num === 10){
    console.log("Your number is equal to 10")
} else {
    // our strings cannot be compared with numbers, so we go to the else block
    console.log("Invalid!")
}


let myNum = 20;
let myStr = "20";

// // === - strict equal to, the types MUST match for it to be true! (either both strings or both numbers)
// // == - types can be different, this will follow the rule where the comparison will  convert the numeric string into a number
// // = - this is NOT for comparisons!!! this is for variable assignment!!
// let a = 10;
// if(myNum === Number(myStr)){
//     console.log("Equal!");
// } else {
//     console.log("Not equal.....");
// }


let str1 = "wow";
let str2 = "wow";

if(str1.toUpperCase() === str2.toLowerCase()){
    console.log("Equal!");
} else {
    console.log("Not equal.....");
}