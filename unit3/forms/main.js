// form itself
let form = document.querySelector("form");
// input
let input = document.querySelector("#user-input");

// for forms, add the event listener to the form itself and use the "submit" event
form.addEventListener("submit", (event) => {
    // event - an object that keeps track of the properties of the event that just occured.  it also includes some functionality that will stop the page from refreshing (event.preventDefault())
    event.preventDefault();

    // to get the value of our input textbox
    // use input.value (not innerText)
    // console.log(input.value);
    alert(input.value)

    // clear the input
    input.value = "";
})


// 
let pizzaDeliveryForm = document.querySelector("#pizza-form");

let deliveryName = document.querySelector("#delivery-name");

// Toppings
let pepperoni = document.querySelector("#pepperoni");
let pineapple = document.querySelector("#pineapple");
let anchovies = document.querySelector("#anchovies");

// Crust
let regularCrust = document.querySelector("#regular");
let thinCrust = document.querySelector("#thin");
let cheesyCrust = document.querySelector("#cheesy");

pizzaDeliveryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // for checkboxes we use .checked
    // console.log(`Pepperoni: ${pepperoni.checked} - ${pepperoni.id}`)

    let toppings = [];

    // let toppings = "";

    // add pepperoni to the array if checked
    // if(pepperoni.checked){
    //     toppings.push(pepperoni.id); 
    //     // toppings += pepperoni.id
    // }
    // if(pineapple.checked){
    //     toppings.push(pineapple.id);
    // }
    // if(anchovies.checked){
    //     toppings.push(anchovies.id);
    // }

    // querySelectorAll("parentElement childElements")
    // this will grab all of the inputs inside the toppings div
    // parentElement: #toppings (toppings div)
    // childElements: input (inputs inside the div)
    let toppingInputs = document.querySelectorAll("#toppings input");
    console.log("TOPPINGS: ");
    console.log(toppingInputs);

    for(let i = 0; i < toppingInputs.length; i++){
        // go through our list of inputs.
        // if the input is checked, add to toppings list
        if(toppingInputs[i].checked){
            toppings.push(toppingInputs[i].id)
        }
    }

    // if topping is checked, add it to our toppings array
    // console.log(toppings.join(", ")) // pineapple, anchovies

    let crustType = "";
    // check if regular crust is selected regularCrust
    if(regularCrust.checked){
        crustType = "Regular Crust";
    } else if(thinCrust.checked){
        crustType = "Thin Crust";
    } else if(cheesyCrust.checked){
        crustType = "Cheesy Crust";
    }

    // console.log(crustType)
    
    // deliveryName
    // toppings
    // crustType

    // as long as the user has entered a name, submit their order by alerting them with their final order.  after that, reset the inputs back to their defaults
    
    // if the user did NOT enter a name, alert them that they need a name for delivery

    if(deliveryName.value !== ""){
        // submit
        alert(`${deliveryName.value}, your order has been placed: \nToppings: ${toppings.join(", ")} \nCrust: ${crustType}`);

        // clear
        // resets multiple form inputs inputs
        pizzaDeliveryForm.reset();
    } else {
        // alert them that they need a name
        alert("Please add your name for delivery.")
    }
})