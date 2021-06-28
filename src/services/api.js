async function FetchStarWarsPlanet() {
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchApi = await fetch(API_URL);
  const resolveApi = await fetchApi.json();
  const { results } = await resolveApi;

  return results;
}

export default FetchStarWarsPlanet;
