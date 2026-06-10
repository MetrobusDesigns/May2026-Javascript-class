/*
Write a function called duplicate that takes in an array and returns true if the array contains at least 2 of the same item.

Examples:

duplicate(['hi', 'wow, 'hey', 'hi']) => true
duplicate(['one', 'two' 'three']) => false
duplicate([1,7,32,1,10,2,11]) => true

*/

const duplicateCheck = (arr1) => {
    let duplicate = 0 
    for (let i=0; i < arr1; i++){
for (let m = i + 1; m < arr1.length; m++){
    if (arr[i] === arr[m]) return true;
    }
    return false;
}
}
console.log (duplicateCheck(['one', 'two' , 'three']));

// const duplicate = (arr) => {
//   let foundMatch = false;
//   arr.forEach((item, index) => {
//     if (arr.indexOf(item) !== index) found = true;
//   });
//   return found;
// };


const duplicateCheck2 = (arr) => 
    {return arr.some((item, index) => arr.indexOf(item) !== index)};

console.log(duplicateCheck2(['one', 'two', 'three'])); //ER false
console.log(duplicateCheck2([ 1 , 3 , 5 , 1 , 8])); //ER true