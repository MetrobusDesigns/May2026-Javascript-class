// Global Scope vs Local/Block Scope

// Global Variables -
// a global variable is a variable that has been declared outside of any loop/function/if (outside {})
// it can be accessed/modified throughout our program, including inside any {}
let a = 5; // Global Variable

// Global Scope - the scope our global variables can access.  this essentially means, these variables are accessible from anywhere

//when modifying a global variable inside a function, because you have direct access to that variable, any changes made will actually modify the variable and we don't need to return to make that possible
function addToA(){
    a += 10;
}

addToA();
console.log(a);

function multiplyA(){
    a *= 3;
}

multiplyA();
console.log(a);

// Local Variables
// a local variable can only be accessed inside of the scope that it has been defined in

// outside {} - global scope
// inside {} - local scope

function addToB(){
    // b is local to the function addToB so this variable can only be accssed inside this function
    let b = 7; // Local Variable

    b += 10;

    return b; // HOWEVER! you can access the value of b by returning it!
}

// 7
// 17
// error
// creates a new variable from the value we get back from the function
let returnB = addToB(); // global variable
console.log("addToB: ")
console.log(addToB()); 
// console.log(b);

console.log(`b: ${returnB}`)

function addToReturnB () {
    returnB += 5;
}

addToReturnB();
console.log(returnB);

// the i you create in for loops is always local to the for loop you create it in
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log(i) // won't work

// global
let str = "JavaScript";

function printStr(){
    // tries to access the more specific local str ("React") but fails because we cannot access the local str before it has been initialized
    // console.log("top of function: " + str);
    // local
    let str = "React";

    // inside our function, printStr is going to try to access the most specific str.  in this case, that will be our local str "React"
    // this occurs because of the naming conflict since both are named str
    console.log(`print str: ${str}`);
}

// what will print?  JavaScript, React, or error
printStr();

function numTest(num){
    // parameters act like local variables and are only available inside the function you create them in
    num += 5;
    return num;
}

let num1 = 10;
numTest(num1);
// console.log(num);
num1 = numTest(num1);
console.log(num1)

let x = 100;
function testX(x){
    let y = 150;
    x = y;
}

// testX(x);
// console.log("x: ")
// console.log(x);

x = 100;
function testY(x){
    let y = 50;
    x = y;
    return x;
}

x = testY(x);
console.log(x);