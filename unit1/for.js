console.log("For!")
for(let i=0; i<=10; i+=5){
    console.log(i);
    };

    let newArray = ["Java" , "Python" , "C++" , "Perl" , "Solid" , "Astro" , "PHP", "Ruby" , "Vue"];

for (let i = 0; i < newArray.length; i++) {
    console.log(i);
    console.log(newArray[i]);
};

let str = "VSCode"
console.log("\nVSCode");
for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}; 

console.log("Reverse VSCode");
for(let i = str.length-1; i>=0; i-- ) {
console.log(str[i]);

}


// For Loops

// print out all numbers between 0 and 10 on separate lines

/*
0
1
2
3
...
10
*/

// let num = 0;

// while(num < 11){ // <= 10
//     console.log(num)
//     num += 1; // num++
// }

// For Loop
/*
a for loop is another way to loop through a section of code
for(variable initialization; condition; increment){
    // code
}
first, the for loop will initialize your variable (i) and then run through your code
at the end of your code, the increment statement gets run (i++) and the condition becomes checked
*/
console.log("For!")
for(let i = 0; i <= 10; i++){
    console.log(i)
}
// i can only be accessed inside the for loop!
// console.log(i);

// if you define the variable prior to the loop, you can access it afterwards
console.log(" x ")
let x = 0;
for(x; x < 50; x+=5){
    console.log(x)
}

console.log(`x after the loop: ${x}`);


//let newArray = ["Java", "Python", "C++", "Perl", "Solid", "Astro", "PHP", "Ruby", "Vue"];

// i goes from 0 to 5 
// i is our index position that we use to access each individual item with our bracket syntax (newArray[i])
for(let i = 0; i < newArray.length; i++){
    console.log(i)
    console.log(newArray[i]);
}

// for loops are better for concrete tasks where it is easy to define a beginning/end
// while loops are better for indefinite tasks where you don't know exactly how many times the task will be running
// anything you do with a for loop, you can do with a while loop

// let str = "VSCode";
// //         012345
// console.log("\nVsCode")
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// console.log("Reverse VSCode");
// // when going through a string or an array in reverse with a for loop:
// // start your variable at the length-1.  this will make it so you start at the last character.  if you don't add the -1, you'll be out of bounds! (remember, our arrays/strings start at index 0)
// // for our condition, i should be >= 0.  this will ensure that the item/letter at index 0 is accounted for.  we use greater than (>) because we need to decrement our i to 0 as opposed to start at 0 and increment to the length. simply put, we're going down!
// // in order to go down, we use i-- or i -= 1 to subtract from i as we iterate through the loop
// for(let i = str.length-1; i >= 0; i--){
//     console.log(str[i]);
// }

let nums = [5, 14, 3, 7, 12, 15, 11, 22, 6, 4];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) {
    console.log(nums[i]);
  }
}

// Output:
// 14
// 12
// 15
// 11
// 22