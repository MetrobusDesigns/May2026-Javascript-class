const prompt = require("prompt-sync")({ sigint: true });

/*
- get input from 2 players ("rock", "paper", and "scissors")

- potentially: values for the 3 options OR could use their names

- comparisons between inputs

- output: the winner OR a tie

*/

console.log("Player 1, Enter 'rock', 'paper' or 'scissors': ");
let player1 = prompt("> ").toLowerCase();

console.log("Player 2, Enter 'rock', 'paper' or 'scissors': ");
let player2 = prompt("> ").toLowerCase();

// adding .toLowerCase() to our prompts guaruntees that our inputs will be consistent for when we make our comparions.  we won't need to account for multiple cases (Rock, rock, ROCK), because they will all be converted to lower case.

// if player1 doesn't input rock,paper scissors OR player2 doesn't input rock, paper, scissors
if (
  (player1 !== "rock" && player1 !== "paper" && player1 !== "scissors") ||
  (player2 !== "rock" && player2 !== "paper" && player2 !== "scissors")
) {
  console.log("Invalid input");
  return;
}

if (player1 === player2) {
  console.log("It's a tie!");
} else if (
  (player1 === "rock" && player2 !== "paper") ||
  (player1 === "paper" && player2 !== "scissors") ||
  (player1 === "scissors" && player2 !== "rock")
) {
  console.log("Player 1 Wins!");
} else {
  console.log("Player 2 Wins!");
}

/*
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "paper" && player2 === "rock") ||
  (player1 === "scissors" && player2 === "paper")
*/
