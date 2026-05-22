/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
let students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
for (let i = 0; i < students.length; i++) {
  {
    console.log(students[i]);
  }
}


  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  let grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  let positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code



  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  let mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code



  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, using pop and shift.  Then console.log out each value in the array individually.
  let symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
    


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice) to the start of the following array using unshift and two values to the end of the array (of your choice) using push.
  // Then console.log out each value in the array individually.
  let fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code





  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  let emptyArray = [];
  // Challenge 8 Code




  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code



  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 10 Code
  



  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  let dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 11 Code

  
  
  
  
  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 12 Code



  
  console.log("\n");

  console.log("Challenge 13");
  // Challenge 13
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 13 Code



  
  console.log("\n");
  console.log("Challenge 14");
  // Challenge 14
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. 
  // Challenge 14 Code
let games1 = ["fortnite", "counter-strike" , "warcraft"]
let games2 = ["candy-crush" , "clash-of-clans" , "pokemon"]
const games3 = games1.concat(games2);

console.log(games3);
//ER combined array 1 & 2
for (let i = 0; i < games3.length; i++) {
    console.log(games3[i]);
}
console.log(games3.join('\n'));