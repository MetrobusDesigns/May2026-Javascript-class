// Methods - built in functions 
// .toUpperCase(), Math.random(), etc.

// .push(item) - adds an element to the end of our array
let arr1 = ["dog", "cat", "snail", "bird", "frog"];

arr1.push("deer");
arr1.push("lizard", "gecko")

console.log(arr1)

// let str = "wow"
// str += "s";
// console.log(str)

// .pop()
// removes the item from the end of the array
arr1.pop();
let lastAnimal = arr1.pop();
console.log(`Last item: ${lastAnimal}`)
console.log(arr1)

// unshift and shift
// same as push and pop respectively, but for the beginning of our arrays
// adds to beginning
// arr1.unshift("beetle");
// console.log(arr1)
// // removes from beginning
// arr1.shift();
// console.log(arr1);

console.log("\ncurrent array");
console.log(arr1)

// .reverse() will reverse an array
// this method reverses the elements in place, meaning that it modifies the original array
arr1.reverse();
// arr1 = arr1.reverse(); not required!!
console.log("\nreverse array");
console.log(arr1);

// .indexOf(element)
// searches for an element and gives us the first index of that element
// if the element is not found, we get -1
console.log("\nindexof element example:");
console.log(arr1.indexOf("hedgehog"))
console.log(arr1.indexOf("DEER"))
console.log(arr1.indexOf("deer"))

// .includes(element)
// checking to see if an item exists in the array
// true if the element is found
// false if not found

console.log("\nincludes element example:");
console.log(arr1.includes("deer"));
console.log(arr1.includes("crab"));

// .splice(index)
// given an index, .splice() will start at the index and remove from that index to the end of the array
// you can get access to what you removed by storing your .splice() in a variable
console.log("\nBEFORE");
console.log(arr1)
let mySplice = arr1.splice(3);
console.log("\nAFTER")
console.log(arr1)
console.log("splice: ")
console.log(mySplice)

arr1 = ["dog", "cat", "snail", "bird", "frog"];
// .splice(index, amountToDelete)
// go to the index and delete that many items
// below, we're saying go to index 2 and delete 1 item
arr1.splice(2,1)
console.log("splice with 2 arguments")
console.log(arr1)

arr1.splice(1,2) //1,2
console.log(arr1)

// resetting again
arr1 = ["dog", "cat", "snail", "bird", "frog"];

// .slice()
// .slice(inclusive,exclusive) - grab a portion of the array starting from the inclusive index and stopping right before the exclusive index
// same thing as substring() but for arrays

// SPLICE modifies the array.  SLICE does NOT!
console.log("slice")
console.log(arr1.slice(0,3))
console.log(arr1)
// .slice(index) - go from the index to the end
console.log(arr1.slice(3))

//.concat()
// combines 2 arrays
// does not modify the original array
// array1.concat(array2)
let nums1 = [2,4,6];
let nums2 = [5,10,20,40];
console.log("\n concat")
console.log(nums1.concat(nums2))
console.log(nums1)

// modify nums1 so it equals the concatenation of nums1 and nums2
// reassignment
nums1 = nums1.concat(nums2)
console.log(nums1)


let strArray = ["An", "array", "of", "strings"];

// .join()
// converts our array into a string that is joined together by the specified argument string
// .join(" ") - separates everything by a space
// .join("") - joins everything together with no spaces
// .join() - by default, joins everything together with commas , 
let joinedString = strArray.join();
console.log(joinedString)
console.log(strArray)

//string method

let str = "Thisisastring. This is annother sentence.";
let split = str.split ("");
console.log(split);


// let strReverse = str.reverse();
// console.log(strReverse); // This produces an error, doesn't work


// let strReverse = split.join("");
// //console.log (strReverse)

let reverseMe = "Reverse This String";
//the whole reverse process on 1 line
let reversedStr2 = reverseMe.split("").reverse().join("");

console.log(reverseMe);
console.log(reversedString2);