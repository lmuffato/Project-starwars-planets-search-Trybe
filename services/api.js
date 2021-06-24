const fetchPlanets = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    return planets;
  } catch (error) {
    return Error(error);
  }
};

export default fetchPlanets;
