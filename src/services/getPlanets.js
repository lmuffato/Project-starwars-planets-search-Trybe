export const getPlanets = async () => {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endPoint);
  const { results } = await response.json();
  return results;
};
