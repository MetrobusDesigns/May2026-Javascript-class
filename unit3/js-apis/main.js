// our API URL
// https://dog.ceo/api/breeds/image/random

let apiImg = document.querySelector("#api-img");
// let apiImg = document.getElementById("api-img");


// fetch()
// built in method for making API calls
// takes in a URL as a parameter
// fetch returns a Promise - when we deal with a Promise, we are running code that we have to wait on.  it MIGHT succeed.  it also might fail.
// this is Asynchronous code!  the regular non-asynchronous code will continue running while the API call completes

console.log(1)
fetch("https://dog.ceo/api/breeds/image/random")
  // fetch succeeded, go to the .then()
  // .then() takes in a callback function that will execute when reached
  // response - data we get back from our fetch
  .then((response) => {
    console.log(2)
    // raw HTTP Response - hasn't been processed yet
    // does NOT include any useful information/data from the API
    // console.log(".then() 1");
    // console.log(response);

    // process the data by converting it to the JSON data we need
    // .json() will convert the data properly! but, it returns a promise, so we have to wait on it
    // return will send the response to the next .then() when it is done processing
    return response.json();
  })
  // will run after response data has been processed with .json()
  // data is what we get back from the previous .then()
  .then((data) => {
    console.log(3)
    // console.log(".then() 2");
    // // the actual data we want!!!
    // console.log(data);

    // console.log(data.message);

    apiImg.src = data.message;
    apiImg.style.height = "250px"

  });
  console.log(4)


  // A - 1 2 3 4
  // B - 1 3 2 4
  // C - 1 4 2 3 this one!
  // D - 4 1 2 3

  // https://api.thecatapi.com/v1/images/search
  let catImg = document.querySelector("#cat-img");

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // console.log(data)
        catImg.src = data[0].url;
        catImg.style.height = "250px"
    })