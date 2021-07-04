const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function planetAPI() {
  try {
    const response = await fetch(PLANET_API);
    const { results } = await response.json();
    return results;
  } catch (error) {
    throw Error(error.message);
  }
}

export default planetAPI;
