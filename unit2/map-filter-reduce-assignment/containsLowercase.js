function containsLowercase(string) {
  return string.split("").reduce((acc, char) => {
    return acc || (char === char.toLowerCase() && char !== char.toUpperCase());
  }, false);
}

console.log(containsLowercase("HELLO"));

