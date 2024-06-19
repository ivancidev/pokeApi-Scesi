const URL = "https://pokeapi.co/api/v2/pokemon/";

const valueInput = document.getElementById("search");
const button = document.querySelector("button");
const pokedex = document.getElementById("pokedex");
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", searchPokemon);

async function searchPokemon() {
  try {
    const response = await fetch(URL + valueInput.value.toLowerCase());
    if (!response.ok) {
      showError();
    }

    const data = await response.json();
    pokedex.innerHTML = `
    <h2>${data.name.toUpperCase()}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}"/>
    <p>Altura: ${data.height}</p>
    <p>Peso: ${data.weight}</p>
    <p>Tipo: ${data.types[0].type.name}</p>
    <h2>Habilidades</h2>
    <p>${data.abilities[0].ability.name}</p>
    <p>${data.abilities[1].ability.name}</p>
    
    `;
  } catch (error) {
    console.log(error);
  }
}

function showError() {
  pokedex.innerHTML = `<h2 class="error">Pokemon no encontrado</h2>`;
}
