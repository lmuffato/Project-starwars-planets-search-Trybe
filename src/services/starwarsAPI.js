const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function starWarsApi() {
  try {
    const response = await fetch(endpoint);
    const { results } = await response.json();
    const planets = results;

    // planets.map((planet) => delete planet.residents);
    return planets;
  } catch (error) {
    console.log(error.message);
  }
}

export default starWarsApi;
