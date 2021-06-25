async function starWarsApi() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await response.json();

  if (!results) throw new Error('Erro ao buscar API');

  return results;
}

export default starWarsApi;
