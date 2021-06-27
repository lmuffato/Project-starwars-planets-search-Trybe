const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function dataAPI() {
  const response = await fetch(PLANETS_API);
  const result = await response.json();
  return result;
}
