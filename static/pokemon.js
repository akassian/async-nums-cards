let pokemonsList = []
async function getPokemonsList(){
    pokemonsListResponse = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=964")
    pokemonsList = pokemonsListResponse.data.results
    console.log(pokemonsList)
}

function getThreePokemons(){
    let chosenIndices =[]
    let randomIndex1 = Math.floor(Math.random() * pokemonsList.length)
    chosenIndices.push(randomIndex1)
    console.log(chosenIndices)

    let randomIndex2 = Math.floor(Math.random() * pokemonsList.length)
    console.log("randomIndex1:", randomIndex1)
    while(chosenIndices.includes(randomIndex2)){
        randomIndex2 = Math.floor(Math.random() * pokemonsList.length)
    }
    chosenIndices.push(randomIndex2)

    let randomIndex3 = Math.floor(Math.random() * pokemonsList.length)
    while(chosenIndices.includes(randomIndex3)){
        randomIndex3 = Math.floor(Math.random() * pokemonsList.length)
    }
    let Pokemon1 = pokemonsList[randomIndex1]
    let Pokemon2 = pokemonsList[randomIndex2]
    let Pokemon3 = pokemonsList[randomIndex3]
    console.log("Pokemon1: ", Pokemon1)
    console.log("Pokemon2: ", Pokemon2)
    console.log("Pokemon3: ", Pokemon3)
}

$(document).ready(async function () {
    await getPokemonsList();
    getThreePokemons();
})

