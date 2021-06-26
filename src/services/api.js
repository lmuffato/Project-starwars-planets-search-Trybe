const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const request = await fetch(api);
  const result = await request.json();
  return result.results;
};

export default getPlanets;
