//* Change the font color of the paragraph to light blue.

let paraLightBlue = document.querySelector("p");
paraLightBlue.style.color = "blue";

//* Change the font size of the heading to 48px.
let heading1 = document.querySelector("h1");
heading1.style.fontSize ="72px";

//* Change the text of the paragraph to be the following Hipster Ipsum:
let paragraph1 = document.querySelector("p");
paragraph1.innerText ="Hipster Ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."

//* Change the 13th item to be half transparent. (Look this up!)
paragraph1.innerHTML = paragraph1.innerHTML.replace(
    "twee",
    '<span style="opacity: 0.5;">twee</span>'    
);

// * Change the 3rd item's text to say:
// > I say, "Hi!"

let item3 = document.querySelector("#item-3")
item3.innerText = "hi!"

// * Change the image below the list to be whatever image you want.
let myImg =  document.querySelector("img");
myImg.src = "https://img.pokemondb.net/artwork/large/venusaur.jpg"
// * Change that image's size to be 300 pixels high.
myImg.style.height = "300px";
// * Using HTML, add a new image of your choice below or to the right of the other image and give it a unique id.
let myImg2 = document.querySelector(".fit-picture");
myImg2.style.height = "300px";

let item16 = document.querySelector("#item-16");
item16.className = "item"

item16.innerText = "Won't get fooled again."