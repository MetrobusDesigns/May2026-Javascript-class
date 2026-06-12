
/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
if (!response.ok){  //logical operator NOT OKAY
    throw new Error("could not fetch resource");
} return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
    */
   //ASYNC AND AWAIT
// fetchData(); calls function- only for testing
   async function fetchData() {
    try{
        let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) // using template literal and pokemonName id

    if(!response.ok){
        throw new Error("could not fetch resource")
    }
        const data = await response.json()
        // console.log(data);
        //pulls the sprite front_default sprite property
       const pokemonSprite = data.sprites.front_default;
       const imgElement = document.getElementById("pokemonSprite");
       imgElement.src = pokemonSprite;
       imgElement.style.display = "block";
       imgElement.style.height = "150px";
}
    catch(error){
        console.error(error);
}

   }