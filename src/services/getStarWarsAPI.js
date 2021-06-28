// const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
// const url_alt = 'https://swapi.dev/api/planets';
const getStarWarsAPI = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/planets');
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getStarWarsAPI;
