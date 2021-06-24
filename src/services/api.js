const edpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  try {
    const response = await fetch(edpoint);
    const planets = await response.json();
    return planets;
  } catch (error) {
    return Error(error);
  }
};

export default fetchPlanets;
