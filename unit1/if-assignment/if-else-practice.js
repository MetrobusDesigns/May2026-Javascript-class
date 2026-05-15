for (let line = "# "; line.length < 8; line += "#")
  console.log(line);

let firstName = "Metrobus ";
let lastName = "Driver";

function greet () {
    fullName = firstName + lastName
    return fullName;
}

console.log(`Hello ${greet()}! You did it!`);