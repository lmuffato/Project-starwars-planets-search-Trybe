export default async function requestPlanets() {
  const { results } = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
  return results;
}
