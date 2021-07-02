const reqFetch = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint);
  const json = await response.json();
  const result = json.results;
  result.forEach((elem) => delete elem.residents);
  return result;
};

export default reqFetch;
