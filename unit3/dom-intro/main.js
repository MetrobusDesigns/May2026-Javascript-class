// DOM - Document Object Model
// represents the logical structure of your HTML elements in the form of an object
// functions as a built in API that allows us to programatically interact with our HTML

// in order to gain this functionality, we must first link our HTML and JS files via script tag

// document.querySelector()
// allows us to select a single element on our page
// we can select the element by tag, class, or id
// we can specify which element by passing a string into our .querySelector() function

// . - class name
// # - id name

// selecting child-1 via class name (using .)
let child1 = document.querySelector(".child-1");
console.log(child1);

// any of the following methods will modify the text of a given element
// they will all basically work the same, except .innerHTML() will parse the given HTML
child1.innerText = "New Text!";
// child1.textContent = "New Text!"
// child1.innerHTML = "<h2>New Text!</h2>";

// .className
// modifies the class of an element
child1.className = "child-2";

// grab the DOM introduction header
// modify the text of the header

// grabbing an element by its tag
let header = document.querySelector("h1")
header.innerText = "the NEW header!"

// querySelector only grabs the FIRST element that it can find on the page that matches our selection criteria
let p1 = document.querySelector("p");
p1.innerText = "this one!!";

let p2 = document.querySelector("#p2");
p2.innerText = "NOW this one!";


let child3 = document.querySelector(".child-3");

// style object
// allows us to modify CSS properties in JS
child3.style.background = "orange";
child3.style.border = "4px solid white";
child3.style.fontSize = "42px";

// let child4 = document.querySelector("#child-4");
// .getElementById("idName")
// alternative way to grab an element 
// only works if element has an id
// you can use whichever!!
// no need to put the #, it knows you are looking for an id
let child4 = document.getElementById("child-4");
child4.innerText = "child 4 with get element by id";


let myImg =  document.querySelector("img");

// you can set the src of an img programatically
myImg.src = "https://img.pokemondb.net/artwork/large/venusaur.jpg"
myImg.style.height = "200px";

// COMMON ERROR!
// Uncaught TypeError: Cannot read properties of null
// if it seems like your changes aren't occuring, go to the console in your dev tools (inspect element) and check for the above error
// typically this means that there's a typo on the string inside your query selector


// .innerText of an element is just a string! 
// anything that we would normally do with strings can still apply to the .innerText of an element
console.log(`Child 4 text ${child4.innerText.toUpperCase()}`);