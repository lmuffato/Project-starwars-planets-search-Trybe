const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchStarWars = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default fetchStarWars;
