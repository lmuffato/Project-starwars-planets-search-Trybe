const STARWARS_PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchPlanets() {
  const response = await fetch(STARWARS_PLANETS_ENDPOINT);
  const data = await response.json();
  const planets = data.results.map((planet) => {
    const { residents, ...rest } = planet;
    return rest;
  });
  return planets;
}
