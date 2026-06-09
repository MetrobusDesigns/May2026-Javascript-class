    //1. Change the span with the class `mess-with-me` to have a font size of 40px. 
    // (A span is an inline element tag, typically used inside a block of text)

document.querySelector('.mess-with-me').style.fontSize = '40px';
document.querySelector('.mess-with-me-paragraph').style.background = 'green';


// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

let secondImg = document.querySelector("#hide-me");
secondImg.style.display = "none";

// 4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

let firstImg = document.querySelector('#triceratops')
firstImg.style.width = "324px";

// 1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.

messWithMeSpan.addEventListener("click", () =>{
    messWithMeSpan.style.color = "orange"
})