const prompt = require("prompt-sync")({ sigint: true });
/* break and continue */

// break
// ends loop immediately where you put the break; (the break statement)
// should be placed inside a condition
// NOT the same as return!  return will end the program/respective function it is inside. break will only end the loop
for(let i = 0; i <= 10; i++){
    
    if(i === 7){
        break;
    }

    console.log(i)
}
console.log("after the loop!");

let arr = [1,6,8,13,15,22,27,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13,1,6,8,13];

// write a loop that searches for the number 15 inside the array
// break is useful if the condition for the problem isn't based on going through the entire array
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 15){
        console.log("Found 15!");
        break;
    }
}


// while(true){
//     let num = Number(prompt("Enter num: "));

//     if(num === 0){
//         console.log("done!")
//         break;
//     }
// }
console.log("move on in our code!")

//continue
// console.log("\nContinue");
// for(let i = 0; i <= 10; i++) {
//     if (i===7){
//         // continue - IMMEDIATELY stop the current iteration of the loop and go to the next
//         // go to the top of the for loop and increment i
//         continue;
//     }
// console.log(i);
// };

let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}