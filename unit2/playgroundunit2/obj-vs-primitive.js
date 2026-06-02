/*  Objects vs Primitives */
/*
Primitives
-Numbers
-Strings
-Booleans
(null, undefined, NaN)
Objects
-objects
-arrays
*/
// typeof
// console.log(typeof "a");
// console.log(typeof 10);
// console.log(typeof true);
// console.log(typeof { name: "bill" }); //object
// console.log(typeof [1,2,3,4,5]); //object

let a = 3;
let b = a;
b = 4;

// console.log("A: " + a); // 3
// console.log("B: " + b); // 4

// we create obj1
// obj1 is a reference to the data we set up in a
// a is the actual data itself
// obj1 points to/refers to a's memory location/data
let obj1 = {
    a: 3
}
// we create obj2
// obj2 now refers to the same data that obj1 refers to
let obj2 = obj1;
// when we make changes to obj2 (that is now refering to the same location as obj1), the changes will occur for both
obj2.a = 4;
obj2.b = 5;

// same as before, the 2 objects are currently both pointing to the same location!!! it doesn't matter which we modify, both will update.
obj1.c = 7;
// { a: 4, b: 5, c: 7}

// console.log("obj1: ")
// console.log(obj1) // a: 4 b: 5
// console.log("obj2: ")
// console.log(obj2) // a: 4 b: 5

// obj2 is currently: { a: 4, b: 5, c: 7 }

let obj3 = obj2;

obj3.a = 10;

// console.log("obj1: ")
// console.log(obj1)
// console.log("obj2: ")
// console.log(obj2)
// console.log("obj3: ") // a : 10, b: 5, c: 7
// console.log(obj3)


// object3: a : 10, b: 5, c: 7

// obj4 is a new separate object
let obj4 = {
    // new memory location!!!
    x: 15
}

// we tell obj3 to point to the same data as obj4 
obj3 = obj4;

// console.log("obj1: ")
// console.log(obj1)
// console.log("obj2: ")
// console.log(obj2)
// console.log("obj3: ") 
// console.log(obj3)
// console.log("obj4: ") 
// console.log(obj4)
// obj1 and obj2 will be the same/ obj3 and obj4 will be the same

/*
obj1:
{ a: 10, b: 5, c: 7 }
obj2:
{ i: 5, j: 13 }
obj3:
{ i: 5, j: 13 }
obj4:
{ x: 15 }
 */


obj2 = {
    i: 5,
    j: 13
}

// object 4 will point to obj2's data
// obj3 will continue to point to the data set up by object 4
obj4 = obj2;

// console.log("obj1: ")
// console.log(obj1)
// console.log("obj2: ")
// console.log(obj2)
// console.log("obj3: ") 
// console.log(obj3)
// console.log("obj4: ") 
// console.log(obj4)

// obj1 stops referring to its original data and now points to a blank object
// because no other reference is being made to that original data ({ a: 10, b: 5, c: 7 }), the data is deleted from memory (Garbage Collection)
obj1 = {}

// reassign obj2 to a blank object, object4 will continue pointing to { i: 5, j: 13 }
obj2 = {}

// obj1 and obj2 are pointing to separate blank objects!!! just because the values are the same, doesn't mean they are referring to the same data
obj2.z = 9;

// console.log("obj1: ")
// console.log(obj1)
// console.log("obj2: ")
// console.log(obj2)
// console.log("obj3: ") 
// console.log(obj3)
// console.log("obj4: ") 
// console.log(obj4);

// let arr1 = [1, 5, 9];
// //arr2 and arr1 are referencing the same location in memory
// arr2 = arr1;
// arr2.push(15);

// arr2[0] = 11;

// console.log("arr1:");
// console.log(arr1);
// console.log("arr2:");
// console.log(arr2);

let arr1 = [11, 5, 9, 15]
let arr2 = [11, 5, 9, 15]

let arr3 = [6, 5, 4] 
arr1 = arr3; // 6 5 4 15
arr3.push(3); // ADDS the number 3, NOT fills the arr3 with more indexes 
console.log(arr3);
arr1 = arr2;

console.log("arr1:");
console.log(arr1);
console.log("arr2:");
console.log(arr2);

// function setValue(num) {
//     num = num +5
//     return num;
// }

// let x = 0; 
// // setValue(x);
// x = setValue(x); // reassigns x to the value returned from the function. This is the only way to modify our variable x with the function
// console.log(x); // will now be 5

let objX = {
    x: 0 
}

function setObjectValue(obj) {
    obj.x = obj.x + 5; 
    obj.y = 10;
}

setObjectValue(objX)
console.log("objX:");
console.log(objX); // objX.x = 5

let objA = {
    x: 1
};

setObjectValue(objA)

// console.log("objX:");
// console.log(objX);
// console.log("objA:");
// console.log(objA);

function addName(obj) {
    obj = {};
    obj.name = "Randy"
}
objX = objA;
console.log(objX.name);
addName(objX);
console.log("objX:");
console.log(objX);
console.log("objA:");
console.log(objA);
console.log(objX.name);

function pushNewValue(arr, value){
arr.push(value);
}

let nums = [12, 14, 24]

pushNewValue(nums, 40);

console.log(nums); // it pushes the value. Arrays are handled the same way as objects 

/* Main Point: Objects WILL change when you pass them into a function and modify their data. Primitives will NOT change when pass and modify
them inside a function */

