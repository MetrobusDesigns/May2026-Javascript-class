// reverse - reverses the given string

//     Examples:
//         reverse('colin') -> 'niloc'
//         reverse('mesuara') -> 'arausem'


function reverseString(str) {
  let chars = [];

  for (let i = str.length - 1; i >= 0; i--) {
    chars.push(str[i]);
  }

  return chars.join('');
}

console.log(reverseString('Metrobus'));
