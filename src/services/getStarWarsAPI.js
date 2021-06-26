// const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
const getStarWarsAPI = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getStarWarsAPI;
