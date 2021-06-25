/* const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/'; */
const ENDPOINT_TEST = 'https://swapi.dev/api/planets';

const requestAPI = async () => {
  try {
    const requestFetch = await fetch(ENDPOINT_TEST);
    const response = await requestFetch.json();
    return response;
  } catch (error) {
    throw error('A requisição falhou!');
  }
};

export default requestAPI;
