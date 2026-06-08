//Need an initial prompt to start the fish game
"use strict"
const prompt = require("prompt-sync")({ sigint: true });
//Before diving into the specifics of the fishing game, we know that the structure of the fishing game will require us to create a loop that displays information to the user, then prompts the user for an action.
const target = Math.floor(Math.random()) * 10)+1);
let triesLeft = 5; // build a tries function that randomly gives you the amount of tries  (min 10, max 20) --Keep 5 for testing


// Need to random fish generator
