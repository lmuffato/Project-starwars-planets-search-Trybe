const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();

  const results = data.results.map((planet) => {
    delete planet.residents;
    return planet;
  });

  return results;
};

export default getPlanets;
