const STARWARS_PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getStarWarsPlanets = async () => {
  const planetsList = await fetch(STARWARS_PLANETS_API)
    .then((response) => response.json())
    .then((response) => response.results);
  return planetsList;
};

export default getStarWarsPlanets;
