/*

group-sizes.js
Lets say we have a class of students that we want to separate into groups of three. Inevitably, if there are leftover students, we may need to have some groups of two. A group of one is not something that we want.

Example 1: if we have a class size of 15, we would create 5 groups of 3 and 0 groups of 2 Example 2: if we have a class size of 16, we would create 4 groups of 3 and 2 groups of 2 Example 3: if we have a class size of 17, we would create 5 groups of 3 and 1 group of 2

Write a program that prompts the user for a class size, then logs out the number of groups of 3 and the number of groups of 2 that the class would be divided into.

15 - 5 groups of 3 and 0 groups of 2
16 - 4 groups of 3 and 2 groups of 2
17 - 5 groups of 3 and 1 group of 2

18 - 6 groups of 3 and 0 groups of 2 - divides evenly so only groups of 3, no groups of 2

19 - 5 groups of 3 and 2 groups of 2 - 1 leftover, create 2 groups of 2
20 - 6 groups of 3 and 1 group of 2 - 2 leftover, 1 group of 2


*/

const prompt = require("prompt-sync")({ sigint: true });


let classSize = Number(prompt("How many students are in the class? "));


// %
if(classSize % 3 === 0){
    // divides evenly
    console.log("Divisible by 3")

    let groupsOf3 = classSize/3;

    console.log(`${groupsOf3} groups of 3 and 0 groups of 2`)
} else if(classSize % 3 === 1){
    // 1 leftover
    console.log("1 leftover!")

    // let groupsOf3 = (classSize/3) - 1
    let groupsOf3 = (classSize - 4) / 3;

    console.log(`${groupsOf3} groups of 3 and 2 groups of 2`)
} else if(classSize % 3 === 2){
    // 2 leftover
    console.log("2 leftover!")

    classSize -= 2; // take away 2 people from the class for our single group of 2
    let groupsOf3 = classSize / 3;

    console.log(`${groupsOf3} groups of 3 and 1 group of 2`)
}