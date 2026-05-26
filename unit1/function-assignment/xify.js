// xify - returns the same string, but with every character replaced by an 'x'

//     Examples:
//         xify('hello') -> 'xxxxx'
//         xify('hi there') -> 'xxxxxxxx'

function xify(str){
    let newStr = " "; //empty string set up
    for (let i=0; i < str.length; i++){
        newStr = newStr + "x"  //works?
    }
    return newStr;
};
console.log(xify('test'));

//    for (let i=0; i < str.length; i++ ){
//         newStr = newStr + str[i] + "!";
//         console.log(newStr);
//     }  
//     return newStr;
// }
