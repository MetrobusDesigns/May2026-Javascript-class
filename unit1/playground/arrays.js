




// Learning Arrays

 let a = 1;
 let b = 2; 
let c = 3; 
// let statements are not efficent, use arrays!

//in programming, an Array is a group of data, or data structure
let myArray = [1, 2, 3];
console.log(myArray);

let variableArray = [a , b , c];
console.log(variableArray);

let stringArray = ["a","b","c"]
console.log(stringArray);

let boolArray = [true, false, false]
console.log(boolArray);

//you can put multiple types of data
let multiTypeArray = [ 1, "string", false];
console.log(multiTypeArray);

let names = ["Ash" , "Brock" , "Misty", "Gary" , "Tracy"]
//index         0       1         2         and so on...
// this is the syntax to get the data

//to get the last element in the array, use (names[length-1])
let length = names.length;

console.log(names[0]);
console.log(names.length);
console.log(names[length-1]);
console.log(names[names.length-1]);

let str = "Pikachu";
console.log(str[0]);
console.log(str[str.length -1]);

let nums = [3, 6, 9, "Damn", "you're" , "fine"];

let ctr = 0
while (ctr < nums.length){
    console.log(nums [ctr]);
    ctr++;
};

// go through an array from back to front (reverse order)
nums = [1, 5, 10, 22, 13, 7];
console.log("reverse")
// nums.length-1 to 0
ctr = nums.length-1;
// while(ctr >= 0){
//     console.log(nums[ctr])
//     ctr--;
// }


// get a random number from the nums array
// Math.random()
nums = [1, 5, 10, 22, 13, 7];
//      0                 5

// n = nums.length
// 0 to nums.length - 1
// 0 to 6-1
// 0 to 5
// for arrays the easiest way to get a random number is by doing Math.floor(Math.random() * array.length) for your index
let randomIndex = Math.floor(Math.random() * nums.length)
console.log("\nRANDOM!")
console.log(randomIndex)
console.log(nums[randomIndex])