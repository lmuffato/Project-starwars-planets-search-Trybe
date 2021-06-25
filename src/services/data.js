async function getPlanets() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint);
  const planets = await response.json();
  return planets.results;
}
export default getPlanets;
