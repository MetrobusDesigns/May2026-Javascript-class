         

// yellingChars - returns the given string with an exclamation point after each character

//     Examples:
//         yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//         yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//     Hints:
//         We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.

// let str1 = "wow"
// console.log(str1[0]);

function yellingChars(str) {
    let newStr = "";

    for (let i=0; i < str.length; i++ ){
        newStr = newStr + str[i] + "!";
        console.log(newStr);
    }  
    return newStr;
}
console.log('Yelling Chars');
console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));
