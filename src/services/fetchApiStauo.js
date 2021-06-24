const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const { results } = await (await fetch(endPoint)).json();
  // const response = await api.json();
  // const result = response.results;
  // delete é um 'operador' que deleta chaves de um obj em expecifico
  results.forEach((element) => delete element.residents);
  return results;
};

export default getPlanets;
