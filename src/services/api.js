async function planetsApi() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await response.json();
  results.forEach((item) => delete item.residents);
  return results;
}

export default planetsApi;
