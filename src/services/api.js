// Requisito 1 - Cria fuinção que faz requisição a Api
async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await response.json();
  return planets.results;
}

export default fetchPlanets;
