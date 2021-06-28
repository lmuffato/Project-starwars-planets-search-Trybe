const URL = 'https://swapi-trybe.herokuapp.com/api/';
// const URLZuado = 'https://swapi.dev/api/';

const fetchPlanet = async () => {
  const response = await fetch(`${URL}planets/`);
  const results = await response.json();
  return results;
};

export default fetchPlanet;
