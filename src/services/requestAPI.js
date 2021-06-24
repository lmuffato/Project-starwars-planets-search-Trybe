const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestAPI = async () => {
  const requestFetch = await fetch(ENDPOINT);
  const response = await requestFetch.json();
  return response;
};

export default requestAPI;
