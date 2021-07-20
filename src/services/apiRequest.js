const requestApi = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await request.json();
  return results.filter((item) => delete item.residents);
};
export default requestApi;
