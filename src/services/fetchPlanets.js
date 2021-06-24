const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

export default async function getPlanets() {
  const { results } = await (await fetch(endpoint)).json();
  results.forEach((result) => delete result.residents);
  return results;
}
