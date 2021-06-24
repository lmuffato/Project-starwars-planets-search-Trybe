export default async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  const planetsList = data.results;
  const planetsListWithoutResidents = planetsList
    .map((planetsInfo) => Object.keys(planetsInfo)
      .filter((key) => key !== 'residents')
      .reduce((acc, curr) => {
        acc[curr] = planetsInfo[curr];
        return acc;
      }, {}));
  return planetsListWithoutResidents;
}
