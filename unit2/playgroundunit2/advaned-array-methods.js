
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

let outputStrArr = strArr.map(function (s) {
  return s + "!";
});

console.log("outputStrArr: ");
console.log(outputStrArr);

let personArray = [
  { name: "Jane", age: 32 },
  { name: "Dan", age: 44 },
  { name: "Joe", age: 37 },
];

// for map, the parameter inside our callback function represents each element that we are accessing one at a time in our array
// this is the element that we will apply our operation on
let personArrayOutput = personArray.map(function (person) {
  return { name: person.name, age: person.age + 1 };
});

// function updateAge(person){
//     return { name: person.name, age: person.age + 1 };
// }

// you can call functions inside your map callback function!
// useful if you also need this functionality outside of the map
// let personArrayOutput = personArray.map(function (person) {
//    return updateAge(person);
// });

console.log("personOutputArray: ");
console.log(personArrayOutput);

// Arrow Functions
// function add(a,b){
//     return a + b;
// }
// const functionName = (params) => {}
// const add = (a,b) => {
//     return a + b;
// }

// Implicit Return
// this is for SIMPLE FUNCTIONS ONLY (1 liners)
// here, add will perform an implicit return because the arrow (=>) points to what we want the return value to be directly (no {}, no return keyword)

const add = (a, b) => a + b;

console.log("\nAdd Arrow: ");
console.log(add(5, 10));

let nums2 = [10, 13, 22, 30, 45];

// let outputX3 = nums2.map(function(n){
//     return n*3
// })

// same with an arrow function
// let outputX3 = nums2.map((n) => {
//     return n * 3;
// })

// implicit return (1 liner)
let outputX3 = nums2.map((n) => n * 3);

console.log("output times 3");
console.log(outputX3);

nums2 = [10, 13, 22, 30, 45];

let evenOutput = []; // 10, 22, 30
// put all even numbers in a resulting evenOutput array

for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] % 2 === 0) {
    evenOutput.push(nums2[i]);
  }
}

console.log("\nEvenOutput");
console.log(evenOutput);

// Filter
// array method that removes elements from an array based on a condition (filters them out)
evenOutput = nums2.filter(function (num) {
  // return a condition (not the if statement, just what you would put in the ())
  // if our parameter element passes that condition, we put it inside the resulting array
  // else, the element is NOT added to the resulting array
  return num % 2 === 0;
});

// arrow function
evenOutput = nums2.filter((num) => {
  return num % 2 === 0;
});

// implicit return arrow function
evenOutput = nums2.filter((num) => num % 2 === 0);

console.log("\nEvenOutput Filter");
console.log(evenOutput);

let officeWorkers = [
  { id: 1, name: "Otto", age: 24 },
  { id: 2, name: "Reggie", age: 25 },
  { id: 3, name: "Maurice", age: 22 },
  { id: 4, name: "Sam", age: 26 },
  { id: 5, name: "Eddie", age: 24 },
];

// using filter, place only the people who are 25 and over in the resulting array

// let over25 = officeWorkers.filter((worker) => {
//     return worker.age >= 25;
// })

let over25 = officeWorkers.filter((worker) => worker.age >= 25);

console.log("\n25andOver");
console.log(over25);


// remove the office worker with the id 2 using filter

// if the worker's id is NOT equal to 2, add it to our resulting array
// if it is, then exclude that worker from our final array
// VERY common way to delete elements from an array
let remove2 = officeWorkers.filter((worker) => worker.id !== 2);
console.log("\nRemove 2")
console.log(remove2);

// write a function called removeById that takes in an id as a parameter and uses filter to remove the person with that id

const removeById = (id) => {
    // if we set officeWorkers equal to officeWorkers.filter() at any point, we're saying hey, update this array to equal to the result of our filter
    // this means our changes will persist on our original array as we go through the program
    // modifying our global array
    officeWorkers = officeWorkers.filter((worker) => worker.id !== id);
}

// console.log("\ndelete 4")
// removeById(4) // delete worker 4
// console.log(officeWorkers);

// console.log("\ndelete 5")
// removeById(5) // delete worker 5
// console.log(officeWorkers);

// console.log("\ndelete 2")
// removeById(2) // delete worker 2
// console.log(officeWorkers);

// const removeById = (id) => {
//     return officeWorkers.filter((worker) => worker.id !== id);
// }

// console.log("\ndelete 4")
// console.log(removeById(4))

// console.log("\ndelete 5")
// console.log(removeById(5))

// console.log("\ndelete 2")
// console.log(removeById(2))

// get person 4 in this array.  pretend we don't know the index of person 4 and that we don't necessarily know if person 4 is in the array
officeWorkers = [
  { id: 1, name: "Otto", age: 24 },
  { id: 2, name: "Reggie", age: 25 },
  { id: 3, name: "Maurice", age: 22 },
  { id: 4, name: "Sam", age: 26 },
  { id: 5, name: "Eddie", age: 24 },
  { id: 6, name: "Otto", age: 26 },
];

// colors = ["blue", "yellow", "red"]
// colors.includes("yellow")
// includes is good for primitive arrays (arrays of numbers/strings)
// for objects. includes is NOT used
console.log("\nSearching for worker with id 4")

//console.log(officeWorkers.includes({ id: 4, name: "Sam", age: 26 })) // doesn't work

// .find()
// find allows you to search an array for an object based on a condition
// this is useful because we don't always know which index that object is going to be inside the array or if the object even exists inside the array in the first place
// returns undefined if not found

let foundWorker = officeWorkers.find((worker) => worker.id === 4);
console.log(foundWorker)

let foundWorker2 = officeWorkers.find((worker) => worker.id === 6);
console.log(foundWorker2)

// Otto
// find can only return one element!
// because of this find works best with unique properties
// if multiple elements meet the criteria, find will return the first one in the array
let findPersonByName = officeWorkers.find((worker) => worker.name === "Otto");
console.log("\nBy Name")
console.log(findPersonByName)

// if you need multiple elements, filter can do that instead!
let ottos = officeWorkers.filter((worker) => worker.name === "Otto")
console.log("\n all ottos")
console.log(ottos)


let nums3 = [10,20,30];
let total = 0;


// add all numbers in nums3 together using the total variable

for(let i = 0; i < nums3.length; i++){
    total += nums3[i];
}

console.log("\ntotal: ")
console.log(total);
// reduce - the goal of this function is to bring the contents of your array together into a single element (example, adding all the numbers in the array together)
/*
// adds everything from the array into the accumulator
the currentValue represents each individual element in the array, one at a time
array.reduce((accumulator, currentValue) => {
    
}, initialValue)
// the accumulator gets set to the initialValue to start the process off
// the accumulator will keep track of the changes made through it as we go through each currentValue element in the array
*/
let totalReduce = nums3.reduce((sum, n) => {
    return sum + n;
}, 5) // essentially sum = 0

console.log("\ntotalReduce: ")
console.log(totalReduce);

let strings = ["this", "Is", "Camel","Case"]
// this Is Camel Case

let strReduce = strings.reduce((newStr, str) => {
    return newStr + str + " ";
}, "")

console.log("\nstrReduce");
console.log(strReduce)