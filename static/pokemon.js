let pokemonsList = [];
async function getPokemonsList() {
  pokemonsListResponse = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=964"
  );
  pokemonsList = pokemonsListResponse.data.results;
}

function getThreePokemons() {
  let chosenIndices = [];
  let randomIndex1 = Math.floor(Math.random() * pokemonsList.length);
  chosenIndices.push(randomIndex1);

  let randomIndex2 = Math.floor(Math.random() * pokemonsList.length);
  while (chosenIndices.includes(randomIndex2)) {
    randomIndex2 = Math.floor(Math.random() * pokemonsList.length);
  }
  chosenIndices.push(randomIndex2);

  let randomIndex3 = Math.floor(Math.random() * pokemonsList.length);
  while (chosenIndices.includes(randomIndex3)) {
    randomIndex3 = Math.floor(Math.random() * pokemonsList.length);
  }
  let Pokemon1 = pokemonsList[randomIndex1];
  let Pokemon2 = pokemonsList[randomIndex2];
  let Pokemon3 = pokemonsList[randomIndex3];
  console.log("Pokemon1: ", Pokemon1);
  console.log("Pokemon2: ", Pokemon2);
  console.log("Pokemon3: ", Pokemon3);

  return [Pokemon1.name, Pokemon2.name, Pokemon3.name];
}
//get(name) => get(species.url) => flavor_text_entries[2]
async function getFlavorText(name) {
  let pokemonNameResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  let speciesURL = pokemonNameResponse.data.species.url;
  let speciesResponse = await axios.get(speciesURL);
  let flavorTextEntries = speciesResponse.data.flavor_text_entries;
  for (let flavorText of flavorTextEntries) {
    if (flavorText.language.name === "en") {
      return flavorText.flavor_text;
    }
  }
}

$(document).ready(async function () {
  await getPokemonsList();
  let threePokemons = getThreePokemons();
  for (let pokemon of threePokemons) {
    console.log(pokemon, await getFlavorText(pokemon));
  }
});
