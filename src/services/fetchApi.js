async function fetchApi() {
  const fetchapi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await fetchapi.json();
  return data;
}

export default fetchApi;
