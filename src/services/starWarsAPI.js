const starWarsEndPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  try {
    const response = await fetch(starWarsEndPoint);
    const { results } = await response.json();
    const planets = results;

    planets.map((planet) => delete planet.residents);
    return planets;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchAPI;
