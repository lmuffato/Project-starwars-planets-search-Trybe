import getObjectWithoutTheKey from '../helper/objectsMethods';

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const genericAPI = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const starwarsPlanetsAPI = async () => {
  const { results } = await genericAPI(PLANETS_URL);
  return results;
};

export const fetchPlanets = async () => {
  const results = await starwarsPlanetsAPI();
  const filteredResults = results.map((planet) => {
    const filteredPlanet = getObjectWithoutTheKey(planet, 'residents');
    return filteredPlanet;
  });

  return filteredResults;
};
