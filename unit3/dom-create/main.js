
// document.createElement("")
// creates a new DOM element
// takes in a type of tag as a string ("h1", "h2", "p", "div", etc.) and creates an element of that tag

// creates a new li (list item)
// child element
let item3 = document.createElement("li");
item3.innerText = "item 3!";

// parent element
// needed in order to add our child element to the page
let myList = document.querySelector("ul");

// placing our child element inside the parent element
// parentElement.append(childElement)
myList.append(item3);


// ol
let orderedList = document.createElement("ol");

let parentDiv = document.querySelector("div");
parentDiv.append(orderedList);

let fruit1 = document.createElement("li");
fruit1.innerText = "Strawberry";

let fruit2 = document.createElement("li");
fruit2.innerText = "Mango";

let fruit3 = document.createElement("li");
fruit3.innerText = "Apple";

// orderedList.append(fruit1);
// orderedList.append(fruit2);
// orderedList.append(fruit3);
// .append() can add multiple items at the same time
orderedList.append(fruit1,fruit2,fruit3);

// element can only exist in one place at a time
myList.append(fruit1)

// .remove();
// removes an element from the DOM
// elementToRemove.remove();
// remove will work on ANY element whether it was created in the HTML or JS
fruit1.remove();
fruit3.remove();

// still have access to the element after it's removed so you can add it back
// orderedList.append(fruit3);

// remove on a parent will remove all child elements of the parent as well
// myList.remove();

// write a function called addItemsToList that takes in a DOM element list and an array of items
// the function will then add each element in that array to the element list one at a time

// ["Kiwi", "Orange", "Grapes"]
const addItemsToList = (list, arr) => {
    // create variable for each item in array
    for(let item of arr){
       // create the element
       let newItem = document.createElement("li");

       // give the new element the content from our array
       newItem.innerText = item;

       // append new item to the list
       list.append(newItem);
    }
}

let newFruit = ["Kiwi", "Orange", "Grapes"];
addItemsToList(orderedList, newFruit)
addItemsToList(myList, [4,5,6,7])