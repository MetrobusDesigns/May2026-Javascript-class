function crazyCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let upperLowerMod = Math.random();

    if (upperLowerMod > 0.5) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

console.log(crazyCase('hello'));
console.log(crazyCase('multiple words here'));
console.log(crazyCase('YELLING'));