/*
sayHi
Write a function called sayHi that takes in a name string and adds "Hi, " before the name. Return the newly modified string.

params: 
name - string

return:
string

*/

function sayHi(name) {
  return `Hi, ${name}`;
}

console.log(sayHi("George"));
console.log(sayHi("Hilary"));

/*

bigString

Write a function called bigString that takes in 2 strings and returns which one is bigger. If the strings are equal in size, return a string that indicates this to the user instead.

parameters:
2 strings

return:
string

*/

function bigString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return "Strings are the same size";
  }
}

console.log("\nbigString");
console.log(bigString("biiiiig string", "small"));
console.log(bigString("wow", "woahhhhhhhhhh"));
console.log(bigString("hey", "how"));

/*
bigNumber

Write a function called bigNumber that takes in 2 numbers and returns which one is greater. If the numbers are equal return a string that indicates the two numbers are equal instead.
*/

function bigNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
  return "Numbers are the same size.";
}

console.log("\nBig Number");
console.log(bigNumber(10, 5));
console.log(bigNumber(11, 22));
console.log(bigNumber(1, 1));

/*
    fiveMoreOdd
    Write a function called fiveMoreOdd that takes in an array of numbers and adds 5 to each odd number then returns the updated array.

parameters:
array of numbers 

return 
array of numbers - [number]

[1,2,4,6,7] => [6,2,4,6,12]
*/

function fiveMoreOdd(nums){
    // %2 === 1 - have a remainder
    for(let i = 0; i < nums.length; i++){
        // nums[i] % 2 !== 0 // number is odd
        if(nums[i] % 2 === 1){ // number is odd
            nums[i] = nums[i] + 5;
        }
    }

    return nums;
}

// function fiveMoreOdd(nums) {
//   let results = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 1) {
//       // number is odd
//       results.push(nums[i] + 5)
//     } else {
//         results.push(nums[i])
//     }
//   }
//   return results;
// }

console.log("\nfiveMoreOdd");
console.log(fiveMoreOdd([1, 2, 4, 6, 7]));
console.log(fiveMoreOdd([3, 9, 4]));
console.log(fiveMoreOdd([0, 16, 32]));


/*
arraySummer
Write a function called arraySummer that takes in an array of numbers and adds each number in the array together. Return the total.

[5,6,7,8,9] => 35

params:
number array - arr

returning: 
total - number

*/



function arraySummer(arr){
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
           total += arr[i]; 
        }
        
    }

    return total;
}

console.log("\nArray Summer");
console.log(arraySummer([5,6,7,8,9]))
console.log(arraySummer([3,2,1]))

/*
everyDivisible
Write a function called everyDivisible that takes in a number n then prints every number less than or equal to 100 that is divisible that number n.

For example, if n = 7

Your function would print:

7
14
21
28
35
42
49
56
63
70
77
84
91
98

*/

function everyDivisible(num) {
    for (let i = num; i <=100; i+=num) {
        console.log(i);
    }
}

console.log(everyDivisible(7)); 