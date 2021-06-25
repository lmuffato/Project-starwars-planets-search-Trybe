async function getPlanetsApi() {
  const responsePlanetsApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  return responsePlanetsApi.json();
}

export default getPlanetsApi;
