// Me guardo la url de la que quiero traer los datos
const POKEMONES = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
const URL_ID = "https://pokeapi.co/api/v2/pokemon/";

// Creo una función que pide a través de fetch los datos

const pedirPokemones = () => {

    // Realizo el fetch

    fetch(POKEMONES)
    .then(data => data.json())
    .then(result => {
        const results = result.results;
        console.log(results);
    });
};


// Llamo a mi funcion
pedirPokemones();