// truncate - shortens a long string to 15 characters plus an ellipsis (...)

//     Examples:
//         truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//         truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."


function truncate(str){
    let newStr = "";

    for (let i = 0; i < str.length; i++){
        if (str[i] <= str [i + 15] ){
            newStr = newStr + "...";
        } else {
            newStr = newStr + str[i];
        }
    }
    return newStr;

}

console.log("\ntruncate")
console.log(truncate("What are you doing? Are you a fool?"));
console.log(truncate("This is fine."));
console.log(truncate("Hi. How are you?"));