export default async function FetchStarWars() {
  const edpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const result = await fetch(edpoint);
  const resultJson = await result.json();
  return resultJson;
}
