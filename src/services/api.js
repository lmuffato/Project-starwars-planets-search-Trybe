const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchApi;
