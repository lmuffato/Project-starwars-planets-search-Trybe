async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

export default fetchPlanets;
