// /* exclaim - returns the given sentence with every question mark or period changed to an exclamation point

// Examples:
// exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
// exclaim('This is fine.') -> 'This is fine!'

// */

function exclaim(str){
    let newStr = "";

    for (let i = 0; i < str.length; i++){
        if (str[i] === "." || str[i] === "?"){
            newStr = newStr + "!";
        } else {
            newStr = newStr + str[i];
        }
    }
    return newStr;

}

console.log("\nexclaim")
console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine."));
console.log(exclaim("Hi. How are you?"));