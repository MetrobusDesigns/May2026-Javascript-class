// given an array, print out the item at the 3rd index in the array
// if there aren't enough items for there to be a 3rd index, print out the value at the last index instead
// assume the array will have at least 1 item


//let arr =["Sand" , "Water" , "Beach" , "Umbrella" , "Waves" , "Ice Cream"] // Umbrella
 let arr = ["chair" , "Remote" , "Desk"] //Desk

if (arr.length > 3){
    console.log(arr[3]);
} else{
    let lastIndex = arr.length -1;
    console.log(arr[lastIndex]);}
