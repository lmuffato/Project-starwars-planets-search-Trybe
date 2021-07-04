export default async function fetchAPI() {
  const waitData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  return waitData.json();
}
