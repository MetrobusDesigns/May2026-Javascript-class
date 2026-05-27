const prompt = require("prompt-sync")({ sigint: true });

/* Objects */

let studentName = "Danny";
let studentAge = 23;
let studentId = 101;

// Objects
// data type that help us represent real life entities in the form of key value pairs
/*
for our student object
key-name, value-"Danny"
key-age, value-23
key-id, value-101

let objectName = {
    key1: value1
    key2: value2
}
*/
// key, property, attribute, field - these all mean the same thing in regards to objects
let student1 = {
 // key: value
    name: "Danny", // string
    age: 23, // number
    id: 101, // number
    email: "danny@nd.com"
}

console.log(student1)

// dot notation .
// use this to access a specific property in an object
// objectName.key
console.log(student1.name);
console.log(student1.age);
console.log(student1.id);

// you can also use dot notation to modify properties
// objectName.key = newValue
student1.email = "danny@nobledesktop.com"
console.log(student1)

// increase the student's age by 1
student1.age += 1; // student.age = student.age + 1
console.log(student1);

// you are also free to add additional properties to objects that you didn't initially declare
student1.major = "Computer Science";
console.log(student1);

// birthday property doesn't exist, so you'll get undefined
console.log(student1.birthday);
console.log(student1);

let student2 = {
    name: "Sam",
    age: 24,
    id: 102,
    email: "sam@nd.com",
    major: "Psychology"
}

let student3 = {
    name: "Tucker",
    age: 22,
    id: 103,
    email: "tucker@nd.com",
    major: "Engineering"
}

// array of objects
let classroom = [student1,student2,student3];

console.log(classroom);

// print student2's major utilzing the classroom array
console.log(student2.major);
console.log(classroom[1].major);

// modify student3's id to 104 utilzing the classroom array 
classroom[2].id = 104;
console.log(classroom);

let newStudent = {
    name: "Valerie",
    age: 25,
    id: 201,
    email: "valerie@nd.com",
    major: "Cyber Security"
}

classroom.push(newStudent)
console.log(classroom);

let newEmail = "jack@nd.com";
// you can use variables for your values as well
let student5 = {
    name: "Jack",
    age: 37,
    id: 1000,
    email: newEmail
}
console.log(student5);

// bracket notation
// objectName["keyString"]
console.log(student5.name);
console.log("\nbracket notation")
console.log(student5["name"]);

student5["major"] = "Art";
console.log(student5)

let newProperty = prompt("Enter new key: ");
let newValue = prompt("Enter new value: ");

// after getting a new key and value, add that pair to student5

// bracket notation will evaluate the variable we put in []
// dot notation will try to use it literally
// bracket notation is required when we are using variables for keys
student5[newProperty] = newValue;

// this WON'T WORK for dot notation
// student5.newProperty will literally add a key called "newProperty" instead of the actual value of our newProperty variable
// student5.newProperty = newValue;
// student5.city = "NYC"
console.log(student5);


let myVariable = "phoneNumber";
student5[myVariable] = "111-222-3333"; // works!
// student5.myVariable = "111-222-3333"; // does not work
console.log(student5)