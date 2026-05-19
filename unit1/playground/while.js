'use strict'

// const prompt = require('prompt-sync')({sigint: true});

// let pinCode = "5678"

// let guess = prompt ("enter your PIN: ");

// while loop
// while true, i will do!
/*
    while(condition){
        // run this code
    }
    for as long as the condition as true, keep running the code inside {}
    our code inside the {} will run as normal.  when it makes it to the end, we reevaluate the condition in the while loop
*/

// while (guess !== pinCode){
//     guess = prompt("Try again: ")
// } if (guess === pinCode){
//     console.log("Access granted");}
/*
let ctr =1;

while (ctr <= 10) {
    console.log(ctr);
    ctr++;
}

let even = 0;

while(even <= 20) {
    console.log(even);
    even = even + 2;
}
*/
// create a loop that adds all the numbers between 0 and 15
// let sum = 0;
// let num = 0;
// while(num <= 15){
// sum = sum + num;
// num++; 
// }

// console.log(sum); 

// create a loop that adds all the numbers between 0 and 15
// let sum = 0;
// let num = 0; 

// while(num <= 15){
//     sum = sum + num; // sum += num
//     num++;
// }

// console.log("Final Number!")
// console.log(sum); 

let str = "Weather";
//         0     6

console.log("length of str: ")
console.log(str.length); // length of the string

console.log("our string loop")
let s = 0;
// to access different characters in a string at a certain index 
// use str[index]
while(s < str.length){ //s !== str.length OR s <= str.length-1
    // console.log(s)
    // str[s] - str at s
    console.log(`${s} : ${str[s]}`);
    s++;
}
console.log(s);