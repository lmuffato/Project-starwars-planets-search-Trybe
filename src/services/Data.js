const fetchPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const result = await response.json();
  return result;
};

export default fetchPlanets;
