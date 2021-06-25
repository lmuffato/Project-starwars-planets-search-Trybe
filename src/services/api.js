const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanetsFromApi() {
  const response = await fetch(API_URL);
  return response.json();
}
