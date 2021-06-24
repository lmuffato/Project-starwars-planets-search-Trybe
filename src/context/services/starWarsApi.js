export default async function getStarWarsPlanets() {
  const data = await fetch('https://swapi.dev/api/planets');
  const { results } = await data.json();
  return results;
}
