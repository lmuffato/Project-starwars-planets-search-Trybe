async function getPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  data.results.filter((result) => delete result.residents);
  return data.results;
}

export default getPlanets;
