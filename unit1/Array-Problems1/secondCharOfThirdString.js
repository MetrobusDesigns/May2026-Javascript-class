let strArray = ["laptop", "phone", "Desktop" , "Mac" , "PC"];
//this selects the second (0, 1, 2 ) in the array, which is Desktop
let string3 = strArray [2];
console.log(string3);

let char2 = string3[1];
console.log(char2);
// we are selecting the second letter out of the array, or 'e' out of Desktop
char2= strArray[2][1];
console.log(char2);
// we are selecting the second letter out of the array, or 'e' out of Desktop

console.log('Math round / ceil and floor examples!');
console.log(Math.round(Math.random()*100));
//note that *10 + 11 gets you a number between 1-20
console.log(Math.ceil(Math.random()*10 + 11));
//2 to 21 range, note the parenthesis 
console.log(Math.ceil(Math.random()*10 + 11) + 1);
console.log(Math.floor(Math.random()*10));
// 45 to 95 
console.log(Math.floor(Math.random()* 51 ) + 45);