const getAPI = async () => {
  const urlStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/';
  // const urlStarWarsTest = 'https://swapi.dev/api/planets';
  const response = await fetch(urlStarWars);
  return response.json();
};

export default getAPI;
