const getApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  data.results.forEach((planet) => { delete planet.residents; });
  return data;
};

export default getApi;
