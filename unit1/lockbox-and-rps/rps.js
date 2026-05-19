const prompt= require ("prompt-sync")({sigint: true});

console.log("Player1 - enter 1=rock, 2=paper, or 3=scissors");
let player1 = prompt("> ");

console.log("Player2 - enter rock, paper, or scissors");
let player2 = prompt( "> ");

if(player1 === player2) {
    console.log("it's a tie!");
} else if( player1 === "rock" && player2 !== "paper");
