const fetchApi = async () => {
  const url = 'https://swapi.dev/api/planets';
  const getData = await fetch(url);
  const { results } = await getData.json();
  results.forEach((planet) => delete planet.residents);
  return results;
};

export default fetchApi;
