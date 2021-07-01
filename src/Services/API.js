const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getApi() {
  const response = await fetch(API_URL);
  return response.json();
}

export default getApi;
