const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchAPI() {
  const response = await fetch(API);
  const { results } = await response.json();
  results.map((result) => delete result.residents);
  return results;
}

export default fetchAPI;
