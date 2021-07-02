const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const results = data.results.map((planet) => {
    delete planet.residents;
    return planet;
  });
  return results;
};

export default getApi;
