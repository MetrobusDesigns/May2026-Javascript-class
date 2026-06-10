/* 

[1:35 PM]stringCompareCounter
Write a function called stringCompareCounter that takes in 2 strings of the same length as parameters. return a count of how many characters the strings share at the same index.

Examples:

//(strings share the same character at index 0)
stringCompareCounter('cat','cow') => 1

//(strings share the same characters at indexes 1 and 2)
stringCompareCounter('count','touch') => 2

//(strings share same characters at indexes 1,2, and 3)
stringCompareCounter('well','sell') => 3

*/

function stringCompareCounter (arr1 , arr2) {
    let match=0; // count declared outside of the loop
 for (let i =0 ; i < arr1.length; i++) {;
if (arr1[i] === arr2[i]) {
match++;} 
    }
    return match;
}


console.log(stringCompareCounter('nice','nice'));

