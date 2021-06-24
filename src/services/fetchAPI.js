const fetchAPI = () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(endpoint)
    .then((response) => response.json())
    .catch((error) => error);
};

export default fetchAPI;
