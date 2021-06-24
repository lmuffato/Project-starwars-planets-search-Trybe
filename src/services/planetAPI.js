const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  try {
    const response = await fetch(URL);
    const planets = await response.json();

    return planets.results;
  } catch (error) {
    console.log(error);
  }
};

export default planetsAPI;
