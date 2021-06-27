const starWarsEndPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  try {
    const request = await fetch(starWarsEndPoint);
    const { results } = await request.json();
    const planets = results;

    // planets.map((planet) => delete planet.residents);
    return planets;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchAPI;
