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

        //Me guardo las URL en un array
        results.forEach(element =>{
            const id = parseInt(element.url.slice(34),10);
            console.log(id)

        // Hago un segundo fetch de la URL de cada pokemon por id
        fetch(URL_ID + id)
        .then(respondDetails => respondDetails.json())
        .then(respondDetails => {
            const resultsDetails = respondDetails;
            console.log(resultsDetails);
        });

        });    
    });
};


// Llamo a mi funcion
pedirPokemones();
