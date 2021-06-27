const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchData() {
  const data = await fetch(API_URL);
  const dataToJson = await data.json();
  return dataToJson.results;
}

export default fetchData;
