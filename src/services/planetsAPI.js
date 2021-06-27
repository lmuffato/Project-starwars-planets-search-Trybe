const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const planets = await (await fetch(PLANETS_API)).json();
  return planets.results;
};

export default getPlanets;
