/*

Write a function called endsInY that takes in an array of strings and returns true if all strings end in "y"

endsInY(["cloudy", "sunny","rainy"]) => true
endsInY(["hi", "by","my"]) -> false
endsInY(["yay", "YAY", "y"]) -> true

parameters: [string]

return: boolean

*/

function endsInY(arr) {
  // let boolArray = [];

  for (let i = 0; i < arr.length; i++) {
    // varaible to represent each individual string in for loop
    let str = arr[i].toLowerCase();
    // let lastCharIndex = str.length-1; // index of the last character
    let lastChar = str[str.length - 1];
    // console.log(lastChar);

    // && lastChar !== "Y"
    if (lastChar !== "y") {
      return false;
    } 
    // else {
    //     // if the first word ends in y, return true
    //   return true;
    // }

    // boolArray.push(false)
    // } else {
    //     boolArray.push(true)
    // }
  }

  // for(let i = 0; i < boolArray.length; i++){
  //     if(boolArray[i] === false){
  //         return false
  //     }
  // }

  return true;
}

console.log(endsInY(["cloudy", "sunny", "wow", "rainy"])); // false
console.log(endsInY(["by", "my", "hi"])); // false
console.log(endsInY(["yay", "YAY", "y"])); // true
