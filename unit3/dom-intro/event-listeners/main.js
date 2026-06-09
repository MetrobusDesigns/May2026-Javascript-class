// number variable that represents the calculator's current value
let value = 0;

// display section
let displayNum = document.querySelector("#number");

// buttons
let plusOne = document.querySelector("#plus-one");
let double = document.getElementById("double");
let reset = document.querySelector("#reset");
let plusN = document.querySelector("#plus-n");
//this creates an event listener "click"
plusOne.addEventListener("click" , () => {
    //console.log("button.clicked!");
    value ++;
   // console.log(`Value: ${value}`);
   displayNum.innerText++; // or display.Num.innerText = value to display on web page
})

double.addEventListener("click", () =>
{
    value = value *2; 
    displayNum.innerText = value;
});

const resetValue = () => {
    value = 0;
    displayNum.innerText = value;
};
// when passing in other functions as callbacks, do NOT use ()!  We are not trying to call the function until the event occurs.  using () means we are trying to call the function immediately
// resetValue NOT resetValue()
reset.addEventListener("click" , resetValue);

const addNToValue = (n) => {
    value += n;
    displayNum.innerText = value;
};
// when you have parameters, create a seperate function and call that function INSIDE your callback function!
plusN.addEventListener("click", () =>{
    addNToValue(15);
});
//when the mouse ENTERS the displayNum, it will change color!
displayNum.addEventListener("mouseenter", () => {
    displayNum.style.background = "red";
    displayNum.style.color = "black";
})
//when the mouse LEAVES the displayNum, it will change color!
displayNum.addEventListener("mouseleave", () => {
    displayNum.style.background = "";
    displayNum.style.color = "";
})

const subtractOne = () => {
    value --;
    displayNum.innerText = value;
}