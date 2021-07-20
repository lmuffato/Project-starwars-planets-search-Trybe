async function fetchPlanets() {
  const api = await fetch('https://swapi.dev/api/planets')
    .then((response) => response.json())
    .then((response) => response.results);
  return api;
}

export default fetchPlanets;
