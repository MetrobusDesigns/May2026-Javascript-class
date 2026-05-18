

const prompt= require ("prompt-sync")({sigint: true});

let pinCode = "1234";

let pinGuess = prompt("Enter PIN: ");

if (pinGuess === pinCode){
    console.log("you have access!");
} else if (pinGuess !== pinCode){
    console.log("please try again");
}