"use strict"

const prompt = require("prompt-sync")({ sigint: true });


const target = Math.floor(Math.random() * 10) + 1;
let triesLeft = 3;

while (triesLeft > 0) {
  const guess = parseInt(prompt(`Guess a number (1-10) — ${triesLeft} tries left:`));
  triesLeft--;

  if (guess === target) {
    console.log(`✅ Correct! The number was ${target}.`);
    break;
  } else if (guess < target) {
    console.log(`❌ Too low. ${triesLeft} tries left.`);
  } else {
    console.log(`❌ Too high. ${triesLeft} tries left.`);
  }

  if (triesLeft === 0) {
    console.log(`Game over! The number was ${target}.`);
  }
}