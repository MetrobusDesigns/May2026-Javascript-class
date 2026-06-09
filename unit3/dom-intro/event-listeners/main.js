// number variable that represents the calculator's current value
let value = 0;

// display section
let displayNum = document.querySelector("#number");

// buttons
let plusOne = document.querySelector("#plus-one");
let double = document.getElementById("double");
let reset = document.querySelector("#reset")
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

reset.addEventListener("click" , resetValue);