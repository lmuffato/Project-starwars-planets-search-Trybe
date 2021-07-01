export default async function getPlanets() {
  const planets = await
  fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
  return planets.json();
}
