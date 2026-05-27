
function onlyVowels(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result.join('');
}

 console.log(onlyVowels("James"));