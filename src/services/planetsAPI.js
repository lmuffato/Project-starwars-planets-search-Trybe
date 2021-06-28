const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  try {
    const fetchAPI = await fetch(endpoint);
    const getResponse = await fetchAPI.json();
    return getResponse;
  } catch (e) {
    console.log(e.message);
  }
};

export default planetsAPI;
