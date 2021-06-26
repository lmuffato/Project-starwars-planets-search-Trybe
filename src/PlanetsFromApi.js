async function PlanetsFromApi() {
  const planets = await fetch('https://swapi.dev/api/planets');
  const data = await planets.json();
  return data;
}
export default PlanetsFromApi;
