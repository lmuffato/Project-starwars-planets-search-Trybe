const getApi = async () => {
  const data = 'https://swapi.dev/api/planets';
  const response = await fetch(data);
  const json = await response.json();
  const result = json.results;
  result.forEach((elem) => delete elem.residents);
  return result;
};

export default getApi;
