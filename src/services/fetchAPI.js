const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
const fetchAPI = async () => {
  try {
    const fetchPlanets = await fetch(endpoint);
    const responseFetchPlanets = await fetchPlanets.json();
    return responseFetchPlanets;
  } catch (error) { console.error(error); }
};

export default fetchAPI;
