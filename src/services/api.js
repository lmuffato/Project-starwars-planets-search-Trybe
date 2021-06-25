export const endpoint = 'https://swapi.dev/api/planets';

const getPlanets = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default getPlanets;
