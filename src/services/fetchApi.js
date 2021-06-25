const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = () => fetch(API_URL)
  .then((response) => response.json())
  .then(({ results }) => {
    results.forEach((planet) => delete planet.residents);

    return results;
  });

export default fetchApi;
