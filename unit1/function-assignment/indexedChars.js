/*
indexedChars - adds the index of each character before that character in the given string

    Examples:
        indexedChars('hello') -> '0h1e2l3l4o'
        indexedChars('bye') -> '0b1y2e'
    Hints:
        We can add something BEFORE the current character as well!
*/

function indexedChars(str) {
    let newStr = "";

    for (let i=0; i < str.length; i++ ){
        newStr = newStr + i + str[i];
        console.log(newStr);
    }  
    return newStr;
}
console.log('yes');
console.log(indexedChars('hello'));
