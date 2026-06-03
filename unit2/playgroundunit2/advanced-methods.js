/* Advanced Array Methods */

let nums1 = [1, 2, 3, 4, 5];

let doubled = []; // [2,4,6,8,10]

// double every number in the array and place them in the doubled array

for (let i = 0; i < nums1.length; i++) {
  let result = nums1[i] * 2;
  doubled.push(result);
}

console.log(doubled);

// .map()
// apply some sort of operation to every element in our list
// map is known as a Higher Order Function
// a higher order function takes in a function as a parameter known as a callback function
// callback function - a function that gets passed as a parameter
// the function passed in does not need a name (anonyamous function)

// n - the element we pass into our callback function that represents each individual element in our array

// after the operation was performed on each element, map will return the updated array (it does NOT modify the original array)
let outputMap = nums1.map(function (n) {
  // apply whatever function we want to the individual element and return it to the resulting array
  return n * 2;
});

console.log("map: ");
console.log(outputMap);
console.log("nums1: ");
console.log(nums1);

// nums1 = nums1.map(function (n) {
//   return n * 2;
// });

// console.log("nums1 after modifying: ")
// console.log(nums1)

// add 5 to each odd number
let outputMap5 = nums1.map(function (n) {
  if (n % 2 !== 0) {
    return n + 5;
  } // else {
    // still need to return even if not modifying
    // map needs to apply to EVERY number in our original array!
    return n;
  // }
});

// console.log("outputMap5: ");
// console.log(outputMap5);


let strArr = ["painting", "chair", "whiteboard", "desk"];

// using map, add an ! after every string in the array

let outputStrArr = strArr.map(function(s) {
    return s + "!"
});

console.log("outputStrArr: ");
console.log(outputStrArr);