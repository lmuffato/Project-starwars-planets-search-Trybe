const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getPlanets() {
  const response = await fetch(PLANETS_API);
  const result = await response.json();
  const planets = result.results;
  return planets;
}

export default getPlanets;
