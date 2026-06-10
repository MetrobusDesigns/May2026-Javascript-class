// Change the span with the class mess-with-me to have a font size of 40px. (A span is an inline element tag, typically used inside a block of text)

let messWithMeSpan = document.querySelector(".mess-with-me");
messWithMeSpan.style.fontSize = "40px";
// document.querySelector(".mess-with-me").fontSize = 40px;

// Change the paragraph with the class mess-with-me-paragraph to have a background color of green.

let messWithMeParagraph = document.querySelector(".mess-with-me-paragraph");
messWithMeParagraph.style.backgroundColor = "green";

// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

let secondImg = document.querySelector("#hide-me");
secondImg.style.display = "none";

// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

let firstImg = document.querySelector("#triceratops");
firstImg.style.width = "324px";

// Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.

// let clickSpan = document.querySelector(".mess-with-me");
messWithMeSpan.addEventListener("click", () => {
    messWithMeSpan.style.color = "orange";
})

// Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
firstImg.addEventListener("click", () => {
    firstImg.style.border = "5px solid red";
})

// Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent

let featheredDino = document.querySelector("#feathers");
featheredDino.addEventListener("click", () => {
    featheredDino.style.opacity = "0.5";
})

// Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice


let switchBG = document.querySelector("#toggle");
let row = document.querySelector("#row");

// switchBG.addEventListener("click", () => {
//     row.style.background = "black";
// })


// Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!

let biggifyDino = document.querySelector("#biggify");
biggifyDino.addEventListener("mouseenter", () => {
    biggifyDino.style.width = "300px";
})

// Add a new event listener so that when the biggify dinosaur is no longer hovered, they change back to their original size.
biggifyDino.addEventListener("mouseleave", () => {
    biggifyDino.style.width = "";
})
// Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener. 

switchBG.addEventListener("click", () => {
//     // row.style.background = "black";

//     // if background color has not been set
//     if(row.style.backgroundColor === ""){
//         // set the background color!
//         row.style.backgroundColor = "lightcoral"
//     } else {
//         row.style.backgroundColor = ""; 
//     }
// });

row.style.backgroundColor = 
row.style.backgroundColor === "" ? "lightcoral" : "" });
console.dir(document.body);