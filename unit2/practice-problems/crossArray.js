/*
crossArray
Write a function crossArray that takes in 2 parameters, both arrays of numbers. Return a result array that includes the number at index 0 in the first array, then the number at index 0 in the second array, then the number at index 1 in the first array, then the number at index 1 in the 2nd array and so on. Assume both arrays will be the same size and neither will be empty

[5, 7, 14, 5] - arr1
[6, 2, 22, 1] - arr2

crossArray(arr1,arr2) -> [5,6,7,2,14,22,5,1]

*/


const crossArray = (arr1, arr2) => {
    let newArray = [];

    for(let i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]);
        newArray.push(arr2[i]);
    }

    return newArray;
}

console.log(crossArray([5, 7, 14, 5],[6, 2, 22, 1]))