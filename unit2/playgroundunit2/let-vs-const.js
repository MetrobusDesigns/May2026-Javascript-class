let a = 25;
a = 30;

console.log(a);

// const declared variables CANNOT be reassigned!
const b = 50;
// b = 75; won't work!
// b++;
// b += 25;

console.log(b);

// const arrays can still be modified
// we just can't reassign them!
const newArray = [10,15,20,25];
// newArray = [10,15,20,25,30];
newArray.push(30);

console.log(newArray);

const myComputerObject = {
    OS: "Windows",
    storage: "2TB",
    ram: 32
}

// myComputerObject = {
//     OS: "Windows",
//     storage: "1TB",
//     ram: 16
// }
myComputerObject.ram = 64;
console.log(myComputerObject)